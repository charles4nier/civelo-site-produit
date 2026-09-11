import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { defaultMetadata } from '@shared/config/seo';

import '@shared/styles/index.scss';

import Header from '@shared/components/Header';
import Footer from '@shared/components/Footer';

// Remplace Instrument Serif (délicat, lisait "carton d'invitation d'hôtel
// de charme") — Fraunces à graisse 600 garde un serif chaleureux et
// distinctif, mais avec assez de poids pour rester crédible côté logiciel
// pour une administration, pas une marque lifestyle.
const fraunces = Fraunces({
	subsets: ['latin'],
	weight: ['500', '600'],
	style: ['normal', 'italic'],
	variable: '--font-display',
	display: 'swap'
});

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-body',
	display: 'swap'
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
	colorScheme: 'light',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#ffffff' }
	]
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
			<body>
				<a className="skip-link" href="#contenu">
					Aller au contenu
				</a>
				<Header />
				<main id="contenu">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
