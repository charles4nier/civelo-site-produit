

// Marque Civelo (pictogramme mairie) en SVG inline plutôt qu'un <img
// src="/logo.svg"> — évite la rasterisation à taille fixe que certains
// navigateurs appliquent aux <img> SVG (repéré : rendu flou/pixelisé dans le
// header/footer). Garder /public/logo.svg en plus, pour la favicon, qui a
// besoin d'un fichier référençable par URL.
export default function Logo() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width="512"
			height="512"
			>
			<defs>
	
				<clipPath id="flagShape">
				<path d="M262 78 C290 68 316 88 344 78 V130 C316 140 290 120 262 130 Z" />
				</clipPath>
			</defs>

			<g fill="#0F2034">
	
				<rect x="250" y="72" width="12" height="94" rx="6" />

	
				<path
				d="M205 198
					C211 166 231 143 256 143
					C281 143 301 166 307 198
					Z"
				/>

	
				<path d="M225 207 H287 V268 H225 Z" />

	
				<path
				d="M104 323
					L256 262
					L408 323
					L390 347
					L256 293
					L122 347
					Z"
				/>

	
				<path
				d="M143 340
					H369
					V423
					H329
					V372
					C329 335 300 307 256 307
					C212 307 183 335 183 372
					V423
					H143
					Z"
				/>

	
				<path
				d="M210 423
					V370
					C210 344 230 324 256 324
					C282 324 302 344 302 370
					V423
					Z"
				/>

	
				<rect x="104" y="423" width="304" height="18" rx="3" />
			</g>

			<g clipPath="url(#flagShape)">
				<rect x="262" y="74" width="28" height="62" fill="#0055A4" />
				<rect x="290" y="74" width="27" height="62" fill="#FFFFFF" />
				<rect x="317" y="74" width="27" height="62" fill="#EF4135" />
			</g>
			</svg>
	);
}
