'use client';

import { useState, type MouseEvent, type ReactNode } from 'react';

type Props = { email: string; className?: string; children: ReactNode };

// Garde le href="mailto:" pour le clic droit ("copier l'adresse"), le
// clic milieu/ouverture dans un nouvel onglet, et les lecteurs d'écran —
// mais le clic normal ne doit pas ouvrir de client mail : il copie
// l'adresse dans le presse-papiers à la place.
export default function CopyEmailLink({ email, className, children }: Props) {
	const [copied, setCopied] = useState(false);

	const onClick = async (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// Presse-papiers indisponible (permissions, contexte non sécurisé) :
			// on ne fait rien de plus, le clic droit "copier l'adresse" reste
			// disponible grâce au href conservé.
		}
	};

	return (
		<a href={`mailto:${email}`} className={className} onClick={onClick}>
			<span aria-live="polite">{copied ? 'Adresse copiée !' : children}</span>
		</a>
	);
}
