import Section from '@shared/components/Section';

export default function SiteMairie() {
	return (
		<Section
			eyebrow="Ce que vos habitants viennent chercher"
			title="Un vrai site de mairie, prêt à l'emploi."
			intro={
				<>
					<p>
						Actualités, agenda, démarches, documents municipaux, informations pratiques,
						vie locale…
					</p>
					<p>
						Votre site est conçu autour des informations que les habitants viennent
						réellement chercher.
					</p>
					<p>
						Vous choisissez parmi trois modèles Civelo. Nous l&apos;adaptons ensuite à
						l&apos;identité de votre commune et reprenons avec vous les contenus utiles de
						votre site actuel.
					</p>
					<p>
						<strong>
							Pas besoin de partir d&apos;une page blanche ni de piloter un projet web
							complexe.
						</strong>
					</p>
				</>
			}
		/>
	);
}
