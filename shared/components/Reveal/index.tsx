'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type Props = {
	children: ReactNode;
	className?: string;
	delay?: number;
	as?: 'div' | 'li' | 'article';
};

// Fondu + léger décalage vertical à l'entrée dans le viewport — un seul
// déclenchement (`observer.disconnect()`), respecte `prefers-reduced-motion`.
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: Props) {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const Component = Tag as ElementType;

	return (
		<Component
			ref={ref}
			style={{ transitionDelay: `${delay}ms` }}
			className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}
		>
			{children}
		</Component>
	);
}
