import Section from '@shared/components/Section';
import InfoCard from '@shared/components/InfoCard';

const ITEMS = [
	{
		title: 'Hébergement en France',
		text: 'Votre site est hébergé sur une infrastructure située en France selon les conditions prévues dans l’offre.'
	},
	{
		title: 'Maintenance technique',
		text: 'Nous assurons les mises à jour techniques et la maintenance prévues dans votre abonnement.'
	},
	{
		title: 'Sécurité et sauvegardes',
		text: 'Nous assurons les mesures techniques et sauvegardes comprises dans la prestation.'
	},
	{
		title: 'Accompagnement',
		text: 'Une question ou un besoin concernant votre site ? Votre mairie peut contacter Civelo dans le cadre de l’accompagnement prévu.'
	}
];

export default function Subscription() {
	return (
		<Section
			eyebrow="Les services inclus"
			title="Puis 59 € TTC / mois."
			intro={
				<p>
					Une fois le site en ligne, Civelo assure les services techniques nécessaires à son
					fonctionnement.
				</p>
			}
		>
			<div className="grid grid--2">
				{ITEMS.map((item) => (
					<InfoCard key={item.title} title={item.title}>
						{item.text}
					</InfoCard>
				))}
			</div>
			<p>
				<strong>
					Le site vous appartient. Les 59 € / mois correspondent aux services que Civelo
					assure autour de lui.
				</strong>
			</p>
		</Section>
	);
}
