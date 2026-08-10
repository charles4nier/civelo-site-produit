import type { ReactNode } from 'react';
import './style.scss';

const CLASS_NAME = 'section';

export default function Section({
	id,
	eyebrow,
	title,
	intro,
	children,
	tinted = false
}: {
	id?: string;
	eyebrow: string;
	title: ReactNode;
	intro?: ReactNode;
	children?: ReactNode;
	tinted?: boolean;
}) {
	return (
		<section id={id} className={`${CLASS_NAME} ${tinted ? `${CLASS_NAME}--tinted` : ''}`}>
			<div className="container">
				<p className="eyebrow">{eyebrow}</p>
				<h2 className={`${CLASS_NAME}__title`}>{title}</h2>
				{intro ? <div className={`${CLASS_NAME}__intro`}>{intro}</div> : null}
				{children ? <div className={`${CLASS_NAME}__content`}>{children}</div> : null}
			</div>
		</section>
	);
}
