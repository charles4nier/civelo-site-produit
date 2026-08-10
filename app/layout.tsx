import { Bricolage_Grotesque, Instrument_Sans, DM_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { defaultMetadata } from '@shared/config/seo';

import '@shared/styles/index.scss';

import Header from '@shared/components/Header';
import Footer from '@shared/components/Footer';

const bricolage = Bricolage_Grotesque({
	subsets: ['latin'],
	weight: ['500', '700', '800'],
	variable: '--font-display',
	display: 'swap'
});

const instrument = Instrument_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
	variable: '--font-body',
	display: 'swap'
});

const dmMono = DM_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono',
	display: 'swap'
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
	colorScheme: 'light'
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" className={`${bricolage.variable} ${instrument.variable} ${dmMono.variable}`}>
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
