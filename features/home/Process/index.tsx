import Section from '@shared/components/Section';
import NumberedRow from '@shared/components/NumberedRow';

const STEPS = [
	{
		num: '1',
		title: 'Vous choisissez votre modèle',
		text: 'Édito, Accueillant ou App : vous choisissez la présentation qui correspond le mieux à votre commune.'
	},
	{
		num: '2',
		title: 'Nous préparons les contenus',
		text: 'Nous faisons le point sur votre site actuel et identifions avec vous les informations à reprendre.'
	},
	{
		num: '3',
		title: 'Nous construisons votre nouveau site',
		text: 'Civelo adapte le modèle à votre commune, organise les rubriques et intègre les contenus.'
	},
	{
		num: '4',
		title: 'Votre mairie valide',
		text: 'Vous consultez le nouveau site et nous faisons les ajustements prévus avant sa publication.'
	},
	{
		num: '5',
		title: 'Nous mettons le site en ligne',
		text: 'Votre secrétariat est formé à son utilisation et Civelo prend ensuite en charge l’hébergement et la maintenance prévus dans l’abonnement.'
	}
];

export default function Process() {
	return (
		<Section eyebrow="Déroulement" title="Comment se passe la création du site ?">
			<ol className="bordered-list">
				{STEPS.map((step) => (
					<NumberedRow key={step.num} index={step.num} title={step.title}>
						{step.text}
					</NumberedRow>
				))}
			</ol>
			<div className="actions-row">
				<a className="btn-link" href="#modeles">
					Découvrir les modèles
				</a>
				<a className="btn-primary" href="#contact">
					Demander une présentation →
				</a>
			</div>
		</Section>
	);
}
