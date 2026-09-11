import Section from '@shared/components/Section';

export default function Reversibilite() {
	return (
		<Section
			id="reversibilite"
			eyebrow="La propriété du site"
			title="Et ce site appartient à votre commune."
			intro={
				<>
					<p>
						Les 2 900 € ne correspondent pas à un simple droit d&apos;accès à une plateforme
						Civelo.
					</p>
					<p>
						<strong>Vous achetez réellement votre site.</strong>
					</p>
					<p>
						La commune dispose du site complet, de son interface d&apos;administration, de
						son code source et de ses données.
					</p>
					<p>Votre nom de domaine reste également sous le contrôle de la commune.</p>
					<p>
						Civelo peut ensuite assurer son hébergement et sa maintenance, mais le site
						reste celui de votre mairie.
					</p>
				</>
			}
		>
			<p>
				<strong>Votre site. Votre administration. Votre code. Vos données.</strong>
			</p>
		</Section>
	);
}
