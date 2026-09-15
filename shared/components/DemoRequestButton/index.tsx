'use client';

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './style.scss';

const CLASS_NAME = 'demo-modal';

type Props = { className?: string; children: ReactNode };

// Pas de backend sur ce site (export statique, aucune route API) : le
// formulaire ne fait qu'assembler un mailto: pré-rempli vers
// contact@civelo.fr — c'est le client mail du visiteur qui envoie
// réellement le message, exactement comme le lien mailto qu'il remplace.
// Ça ne change donc rien à ce qu'annoncent les mentions légales ("vous
// nous écrivez directement").
function buildMailto(data: { prenom: string; nom: string; mairie: string; email: string; telephone: string }) {
	const body = [
		`Prénom : ${data.prenom}`,
		`Nom : ${data.nom}`,
		`Mairie concernée : ${data.mairie}`,
		`E-mail : ${data.email}`,
		`Téléphone : ${data.telephone}`
	].join('\n');
	const params = new URLSearchParams({ subject: 'Demande de démonstration', body });
	return `mailto:contact@civelo.fr?${params.toString().replace(/\+/g, '%20')}`;
}

export default function DemoRequestButton({ className, children }: Props) {
	const [open, setOpen] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const firstFieldRef = useRef<HTMLInputElement>(null);
	const titleId = useId();

	const close = () => {
		setOpen(false);
		triggerRef.current?.focus();
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

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		window.location.href = buildMailto({
			prenom: String(form.get('prenom') || ''),
			nom: String(form.get('nom') || ''),
			mairie: String(form.get('mairie') || ''),
			email: String(form.get('email') || ''),
			telephone: String(form.get('telephone') || '')
		});
		close();
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
							<h2 id={titleId} className={`${CLASS_NAME}__title`}>
								Demander une démonstration
							</h2>
							<p className={`${CLASS_NAME}__lead`}>
								Ces informations ouvriront un e-mail pré-rempli vers{' '}
								<span className={`${CLASS_NAME}__email`}>contact@civelo.fr</span>, à envoyer depuis
								votre messagerie.
							</p>
							<form className={`${CLASS_NAME}__form`} onSubmit={onSubmit}>
								<div className={`${CLASS_NAME}__row`}>
									<label className={`${CLASS_NAME}__field`}>
										<span>Prénom</span>
										<input ref={firstFieldRef} type="text" name="prenom" required autoComplete="given-name" />
									</label>
									<label className={`${CLASS_NAME}__field`}>
										<span>Nom</span>
										<input type="text" name="nom" required autoComplete="family-name" />
									</label>
								</div>
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
								<button type="submit" className="btn-primary">
									Envoyer la demande
								</button>
							</form>
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
