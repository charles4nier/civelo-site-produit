import type { ReactNode } from 'react';
import './style.scss';

export default function InfoCard({ title, children }: { title: string; children: ReactNode }) {
	return (
		<article className="card-soft info-card">
			<h3>{title}</h3>
			<p>{children}</p>
		</article>
	);
}
