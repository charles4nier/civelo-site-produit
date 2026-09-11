export const siteConfig = {
	name: 'Civelo',
	description:
		"Un site complet pour votre commune : 2 900 € TTC à la mise en ligne, puis 59 € TTC par mois pour l'hébergement en France, les mises à jour et la veille réglementaire.",
	url: process.env.NEXT_PUBLIC_SITE_URL || 'https://civelo.fr',
	keywords: [
		'site internet commune',
		'site mairie',
		'RGAA',
		'accessibilité numérique collectivité',
		'hébergement France mairie',
		'conformité collectivité territoriale'
	]
};

export const defaultMetadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: 'Civelo — Création de sites internet pour communes',
		template: `%s | ${siteConfig.name}`
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.name }],
	creator: siteConfig.name,
	publisher: siteConfig.name,
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name
	},
	robots: {
		index: true,
		follow: true
	}
};
