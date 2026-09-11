import Section from '@shared/components/Section';
import InfoCard from '@shared/components/InfoCard';

const POINTS = [
	{
		title: 'Le nom de domaine, à votre nom',
		text: 'Déposé au nom de la commune et de son SIRET dès la création du site — jamais au nom du prestataire.'
	},
	{
		title: 'Un export complet, en un clic',
		text: "Depuis votre espace d'administration : le site, son contenu, ses images et documents, et l'espace d'administration lui-même — pas seulement des fichiers bruts à reconstruire ailleurs."
	},
	{
		title: 'Autonome dès réception',
		text: "L'archive fonctionne seule, sans dépendre de nous : n'importe quel prestataire peut la reprendre et la faire tourner sur son propre hébergement."
	}
];

export default function Reversibilite() {
	return (
		<Section
			id="reversibilite"
			eyebrow="Ce que peu de prestataires garantissent"
			title="Vous êtes propriétaire du site, pas locataire."
			intro={
				<p>
					Si vous changez de prestataire, ou si nous cessons notre activité, la commune ne
					repart pas les mains vides ni avec une archive à reconstruire. Elle repart avec un
					site qui fonctionne, ses données, et son espace d&apos;administration.
				</p>
			}
		>
			<div className="grid grid--3">
				{POINTS.map((p) => (
					<InfoCard key={p.title} title={p.title}>
						{p.text}
					</InfoCard>
				))}
			</div>
		</Section>
	);
}
