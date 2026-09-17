import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import DemoRequestButton from '@shared/components/DemoRequestButton';
import './style.scss';

const CLASS_NAME = 'elus-item';

const ARGUMENTS = [
	{
		title: 'Un coût connu pour tout le mandat',
		text: '3 490 € TTC à la création, puis 70 € TTC par mois. Soit 8 530 € TTC sur six ans, sans mauvaise surprise.'
	},
	{
		title: 'Un achat simple',
		text: 'Le montant reste très en dessous du seuil de 40 000 € HT au-delà duquel une procédure formalisée s’impose. Nous vous remettons un devis détaillé pour votre dossier.'
	},
	{
		title: 'Un projet qui ne pèse pas sur vos équipes',
		text: 'Nous prenons en charge la conception, la reprise des contenus et la mise en ligne. Votre secrétariat est simplement formé à la mise à jour du site.'
	},
	{
		title: 'Des financements à explorer',
		text: 'Selon votre territoire, des aides au numérique peuvent exister. Nous vous aidons à identifier les pistes à vérifier.'
	}
];

export default function PourLesElus() {
	return (
		<Section id="elus">
			<Reveal>
				<Eyebrow>Pour le maire et le conseil municipal</Eyebrow>
				<SectionTitle>Un projet simple à présenter en conseil municipal.</SectionTitle>
				<p className="section-intro">
					Nouvelle équipe municipale, site vieillissant, obligations qui s&apos;accumulent :
					le début de mandat est le bon moment pour offrir à la commune un site à la
					hauteur, sans alourdir la charge des équipes.
				</p>
			</Reveal>
			<div className={`grid grid--2 ${CLASS_NAME}__grid`}>
				{ARGUMENTS.map((item, i) => (
					<Reveal key={item.title} delay={i * 90}>
						<div className={CLASS_NAME}>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</Reveal>
				))}
			</div>
			<Reveal delay={140} className="actions-row">
				<DemoRequestButton className="btn-outline" variant="call">
					Réserver un appel pour en discuter →
				</DemoRequestButton>
			</Reveal>
		</Section>
	);
}
