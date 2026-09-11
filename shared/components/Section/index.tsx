import type { ReactNode } from 'react';
import './style.scss';

export default function Section({
	id,
	tinted = false,
	dark = false,
	narrow = false,
	children
}: {
	id?: string;
	tinted?: boolean;
	dark?: boolean;
	narrow?: boolean;
	children: ReactNode;
}) {
	const modifiers = [tinted ? 'section--tinted' : '', dark ? 'section--dark' : ''].filter(Boolean).join(' ');

	return (
		<section id={id} className={`section ${modifiers}`}>
			<div className={`container ${narrow ? 'container--narrow' : ''}`}>{children}</div>
		</section>
	);
}
