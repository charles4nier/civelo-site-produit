import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Export statique pour Cloudflare Pages — pas de serveur Node à héberger,
	// juste des fichiers. `output: 'export'` produit un dossier `out/`
	// (`next build`) au lieu de démarrer un serveur (`next start`, inutilisable
	// ici). Contrepartie : l'API d'optimisation d'image de Next (qui tourne
	// côté serveur) n'existe plus — `images.unoptimized: true` sert les
	// fichiers de `public/` tels quels. Acceptable ici : seulement 4 images
	// (~3,3 Mo au total), 2 usages de `next/image` dans tout le site.
	output: 'export',
	images: {
		unoptimized: true
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'shared/styles')],
		prependData: `@import "variables.scss";`
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	typescript: {
		ignoreBuildErrors: true
	},
	poweredByHeader: false,
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@shared': path.join(__dirname, 'shared'),
			'@features': path.join(__dirname, 'features'),
			'@types': path.join(__dirname, 'types')
		};
		return config;
	}
};

export default nextConfig;
