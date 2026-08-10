import type { ReactNode } from 'react';
import './style.scss';

const CLASS_NAME = 'numbered-row';

export default function NumberedRow({
	index,
	title,
	children,
	meta
}: {
	index: string;
	title: string;
	children: ReactNode;
	meta?: string;
}) {
	return (
		<li className={CLASS_NAME}>
			<span className={`${CLASS_NAME}__index`}>{index}</span>
			<div>
				<h3>{title}</h3>
				<p>{children}</p>
			</div>
			{meta ? <span className={`${CLASS_NAME}__meta`}>{meta}</span> : <span />}
		</li>
	);
}
