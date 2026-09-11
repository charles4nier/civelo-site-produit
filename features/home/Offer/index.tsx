import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const CLASS_NAME = 'offer-item';

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
		<Section id="prestation">
			<Reveal>
				<Eyebrow>Ce que comprend la prestation</Eyebrow>
				<SectionTitle>2 900 € TTC pour créer votre nouveau site.</SectionTitle>
				<p className="section-intro">
					Un tarif clair pour passer de votre site actuel à un nouveau site prêt à être
					utilisé par la commune.
				</p>
			</Reveal>
			<div className="grid grid--2 offer-item__grid">
				{DELIVERABLES.map((item, i) => (
					<Reveal key={item.title} delay={i * 90}>
						<div className={CLASS_NAME}>
							<span className={`${CLASS_NAME}__index`}>{String(i + 1).padStart(2, '0')}</span>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</Reveal>
				))}
			</div>
			<Reveal delay={120}>
				<p className="offer-highlight">
					À la livraison, votre commune dispose d’un site complet et opérationnel.
				</p>
			</Reveal>
		</Section>
	);
}
