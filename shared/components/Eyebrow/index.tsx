import type { ReactNode } from 'react';

export default function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
	return <p className={`eyebrow ${dark ? 'eyebrow--on-dark' : ''}`}>{children}</p>;
}
