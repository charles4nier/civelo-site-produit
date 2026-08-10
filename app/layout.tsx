import { Space_Grotesk, DM_Sans } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { defaultMetadata } from '@shared/config/seo';

import '@shared/styles/index.scss';

import Header from '@shared/components/Header';
import Footer from '@shared/components/Footer';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-display',
	display: 'swap'
});

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	style: ['normal', 'italic'],
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
		<html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
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
