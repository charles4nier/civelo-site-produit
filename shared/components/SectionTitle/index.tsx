import type { ReactNode } from 'react';
import './style.scss';

export default function SectionTitle({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
	return <h2 className={`section-title ${dark ? 'section-title--on-dark' : ''}`}>{children}</h2>;
}
