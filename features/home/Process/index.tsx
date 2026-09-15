import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const STEPS = [
	{
		title: 'Vous choisissez votre modèle',
		text: 'Édito, Accueillant, Moderne ou Classique : vous choisissez la présentation qui correspond le mieux à votre commune.'
	},
	{
		title: 'Nous préparons les contenus',
		text: 'Nous faisons le point sur votre site actuel et identifions avec vous les informations à reprendre.'
	},
	{
		title: 'Nous construisons votre nouveau site',
		text: 'Civelo adapte le modèle à votre commune, organise les rubriques et intègre les contenus.'
	},
	{
		title: 'Votre mairie valide',
		text: 'Vous consultez le nouveau site et nous faisons les ajustements prévus avant sa publication.'
	},
	{
		title: 'Nous mettons le site en ligne',
		text: 'Votre secrétariat est formé à son utilisation et Civelo prend ensuite en charge l’hébergement et la maintenance prévus dans l’abonnement.'
	}
];

export default function Process() {
	return (
		<Section tinted>
			<Reveal>
				<Eyebrow>Déroulement</Eyebrow>
				<SectionTitle>Comment se passe la création du site ?</SectionTitle>
			</Reveal>
			<ol className="process-list">
				{STEPS.map((step, i) => (
					<Reveal as="li" key={step.title} delay={i * 80}>
						<div className="process-item">
							<span className="process-item__index">{String(i + 1).padStart(2, '0')}</span>
							<h3>{step.title}</h3>
							<p>{step.text}</p>
						</div>
					</Reveal>
				))}
			</ol>
			<Reveal delay={140} className="actions-row">
				<a className="btn-primary" href="#modeles">
					Découvrir les modèles
				</a>
				<a className="btn-outline" href="#contact">
					Demander une présentation →
				</a>
			</Reveal>
		</Section>
	);
}
