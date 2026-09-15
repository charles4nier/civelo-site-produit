'use client';

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './style.scss';

const CLASS_NAME = 'demo-modal';

type Props = { className?: string; children: ReactNode };
type Status = 'idle' | 'sending' | 'success' | 'error';

export default function DemoRequestButton({ className, children }: Props) {
	const [open, setOpen] = useState(false);
	const [status, setStatus] = useState<Status>('idle');
	const [errorMessage, setErrorMessage] = useState('');
	const dialogRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const firstFieldRef = useRef<HTMLInputElement>(null);
	const titleId = useId();

	const close = () => {
		setOpen(false);
		triggerRef.current?.focus();
		// Laisse le temps à la transition de fermeture avant de réinitialiser,
		// pour ne pas voir le formulaire "sauter" pendant qu'il disparaît.
		setTimeout(() => {
			setStatus('idle');
			setErrorMessage('');
		}, 200);
	};

	useEffect(() => {
		if (!open) return;
		firstFieldRef.current?.focus();

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close();
				return;
			}
			if (e.key !== 'Tab') return;
			const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
				'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			if (!focusable || focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [open]);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		setStatus('sending');
		setErrorMessage('');
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					prenom: String(form.get('prenom') || ''),
					nom: String(form.get('nom') || ''),
					mairie: String(form.get('mairie') || ''),
					email: String(form.get('email') || ''),
					telephone: String(form.get('telephone') || ''),
					site: String(form.get('site') || '')
				})
			});
			if (!res.ok) {
				const data = await res.json().catch(() => null);
				throw new Error(data?.error || "L'envoi a échoué.");
			}
			setStatus('success');
		} catch (err) {
			setStatus('error');
			setErrorMessage(err instanceof Error ? err.message : "L'envoi a échoué.");
		}
	};

	return (
		<>
			<button type="button" ref={triggerRef} className={className} onClick={() => setOpen(true)}>
				{children}
			</button>
			{open &&
				createPortal(
					<div className={`${CLASS_NAME}__overlay`} onMouseDown={close}>
						<div
							className={CLASS_NAME}
							ref={dialogRef}
							role="dialog"
							aria-modal="true"
							aria-labelledby={titleId}
							onMouseDown={(e) => e.stopPropagation()}
						>
							<button type="button" className={`${CLASS_NAME}__close`} onClick={close} aria-label="Fermer">
								×
							</button>

							{status === 'success' ? (
								<>
									<h2 id={titleId} className={`${CLASS_NAME}__title`}>
										Demande envoyée
									</h2>
									<p className={`${CLASS_NAME}__lead`}>
										Merci, votre demande nous est bien parvenue. Nous revenons vers vous sous 48
										heures ouvrées.
									</p>
									<button type="button" className="btn-primary" onClick={close}>
										Fermer
									</button>
								</>
							) : (
								<>
									<h2 id={titleId} className={`${CLASS_NAME}__title`}>
										Demander une démonstration
									</h2>
									<p className={`${CLASS_NAME}__lead`}>
										Quelques informations pour organiser une démonstration avec votre commune.
									</p>
									<form className={`${CLASS_NAME}__form`} onSubmit={onSubmit}>
										<label className={`${CLASS_NAME}__field`}>
											<span>Prénom</span>
											<input ref={firstFieldRef} type="text" name="prenom" required autoComplete="given-name" />
										</label>
										<label className={`${CLASS_NAME}__field`}>
											<span>Nom</span>
											<input type="text" name="nom" required autoComplete="family-name" />
										</label>
										<label className={`${CLASS_NAME}__field`}>
											<span>Mairie concernée</span>
											<input type="text" name="mairie" required autoComplete="organization" />
										</label>
										<label className={`${CLASS_NAME}__field`}>
											<span>E-mail</span>
											<input type="email" name="email" required autoComplete="email" />
										</label>
										<label className={`${CLASS_NAME}__field`}>
											<span>Téléphone</span>
											<input type="tel" name="telephone" required autoComplete="tel" />
										</label>
										{/* Piège à bots : jamais visible ni annoncé, un humain ne le remplit jamais. */}
										<label className={`${CLASS_NAME}__honeypot`} aria-hidden="true">
											<span>Site web</span>
											<input type="text" name="site" tabIndex={-1} autoComplete="off" />
										</label>
										{status === 'error' && (
										<p className={`${CLASS_NAME}__error`} role="alert">
											{errorMessage}
										</p>
									)}
										<button type="submit" className="btn-primary" disabled={status === 'sending'}>
											{status === 'sending' ? 'Envoi…' : 'Envoyer la demande'}
										</button>
									</form>
								</>
							)}
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
