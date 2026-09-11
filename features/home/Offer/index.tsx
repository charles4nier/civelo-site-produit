import Section from '@shared/components/Section';
import InfoCard from '@shared/components/InfoCard';

const DELIVERABLES = [
	{
		title: 'La création et la personnalisation',
		text: 'Nous adaptons le modèle choisi à l’identité de votre commune et préparons les différentes rubriques du site.'
	},
	{
		title: 'La reprise de vos contenus',
		text: 'Nous récupérons avec vous les contenus utiles de votre site actuel : informations pratiques, pages municipales, documents, coordonnées et autres contenus à conserver.'
	},
	{
		title: 'La mise en ligne',
		text: 'Nous préparons le site, effectuons les vérifications prévues dans la prestation et assurons sa mise en ligne.'
	},
	{
		title: 'La formation de votre secrétariat',
		text: 'Votre équipe apprend à publier une actualité, ajouter un document, modifier une page ou mettre à jour une information.'
	}
];

export default function Offer() {
	return (
		<Section
			id="prestation"
			tinted
			eyebrow="Ce que comprend la prestation"
			title="2 900 € TTC pour créer votre nouveau site."
			intro={
				<p>
					Un tarif clair pour passer de votre site actuel à un nouveau site prêt à être
					utilisé par la commune.
				</p>
			}
		>
			<div className="grid grid--2">
				{DELIVERABLES.map((item) => (
					<InfoCard key={item.title} title={item.title}>
						{item.text}
					</InfoCard>
				))}
			</div>
			<p>
				<strong>À la livraison, votre commune dispose d’un site complet et opérationnel.</strong>
			</p>
		</Section>
	);
}
