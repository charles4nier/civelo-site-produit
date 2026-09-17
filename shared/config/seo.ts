export const siteConfig = {
	name: 'Civelo',
	description:
		'Site internet clé en main pour les communes de moins de 5 000 habitants : 3 490 € TTC, puis 70 € TTC/mois. Hébergé en France, accessible, tenu à jour.',
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
		default: 'Site internet pour mairie et petite commune | Civelo',
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
	icons: {
		icon: '/logo.svg'
	},
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: siteConfig.url,
		title: 'Civelo · Le site internet des petites communes',
		description: siteConfig.description,
		siteName: siteConfig.name
	},
	robots: {
		index: true,
		follow: true
	}
};
