import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

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
		<Section tinted>
			<Reveal>
				<Eyebrow>Les services inclus</Eyebrow>
				<SectionTitle>Puis 70 € TTC / mois.</SectionTitle>
				<p className="section-intro">
					Une fois le site en ligne, Civelo assure les services techniques nécessaires à son
					fonctionnement.
				</p>
			</Reveal>
			<div className="services-grid">
				{ITEMS.map((item, i) => (
					<Reveal key={item.title} delay={i * 90}>
						<div className="services-item">
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</Reveal>
				))}
			</div>
			<Reveal delay={120}>
				<p className="section-intro section-intro--sm">
					Le site vous appartient. Les 70 € / mois correspondent aux services que Civelo
					assure autour de lui.
				</p>
			</Reveal>
		</Section>
	);
}
