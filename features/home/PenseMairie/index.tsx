import Section from '@shared/components/Section';

export default function PenseMairie() {
	return (
		<Section
			eyebrow="Le contexte"
			title="Pensé dès le départ pour une mairie."
			intro={
				<>
					<p>
						Créer un site de commune ne consiste pas seulement à mettre quelques pages en
						ligne.
					</p>
					<p>
						Une collectivité doit également prendre en compte des sujets comme
						l&apos;accessibilité numérique, la protection des données et les informations
						réglementaires.
					</p>
					<p>Civelo les intègre au projet selon le périmètre prévu dans l&apos;offre.</p>
					<p>
						Vous disposez ainsi d&apos;un site conçu pour une collectivité dès le départ,
						plutôt que d&apos;un site généraliste qu&apos;il faut ensuite adapter.
					</p>
				</>
			}
		/>
	);
}
