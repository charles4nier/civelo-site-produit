import Section from '@shared/components/Section';

export default function Accessibilite() {
	return (
		<Section
			id="accessibilite"
			tinted
			eyebrow="Accessibilité numérique"
			title="L'accessibilité intégrée au projet."
			intro={
				<>
					<p>
						Nous prenons en compte l&apos;accessibilité numérique dans la conception du site
						et réalisons les travaux prévus dans l&apos;offre pour accompagner la commune
						dans ses obligations.
					</p>
					<p>
						Le site est conçu pour faciliter la consultation par le plus grand nombre, quels
						que soient l&apos;appareil ou les modalités de navigation utilisés.
					</p>
				</>
			}
		>
			<a className="btn-link" href="#accessibilite">
				Voir notre démarche d&apos;accessibilité →
			</a>
		</Section>
	);
}
