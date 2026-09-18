import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const STEPS = [
	{
		title: 'Un site à l’image de votre commune',
		text: (
			<>
				Vous choisissez le modèle qui vous ressemble. Nous l&apos;adaptons à votre identité :
				blason, couleurs, photos, rubriques. Vous validez chaque étape, avec 2 séries
				d&apos;ajustements incluses.
			</>
		)
	},
	{
		title: 'Vos contenus repris par nos soins',
		text: (
			<>
				Vous n&apos;avez rien à ressaisir. Nous récupérons les pages, documents et
				informations utiles de votre site actuel, et faisons le tri avec vous. Les anciennes
				adresses sont redirigées pour que vos habitants et Google retrouvent leurs repères.
			</>
		)
	},
	{
		title: 'Une mise en ligne sans interruption',
		text: (
			<>
				Nous vérifions l&apos;affichage sur ordinateur, tablette et mobile, contrôlons les
				critères d&apos;accessibilité du RGAA, puis basculons votre nom de domaine. Pour vos
				habitants, l&apos;ancien site laisse simplement place au nouveau.
			</>
		)
	},
	{
		title: 'Un secrétariat autonome dès le premier jour',
		text: (
			<>
				Une formation de 2 h, pour publier une actualité, ajouter un document ou mettre à
				jour l&apos;agenda. Un guide pas à pas reste à disposition de votre équipe.
			</>
		)
	}
];

export default function Offer() {
	return (
		<Section id="prestation">
			<Reveal>
				<Eyebrow>Ce que comprend la création</Eyebrow>
				<SectionTitle>3 490 € TTC, du premier échange à la mise en ligne.</SectionTitle>
				<p className="section-intro">
					Un prix connu avant de signer. Vous savez exactement ce que vous achetez, et vous
					n&apos;avez rien à piloter.
				</p>
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
			<Reveal delay={120}>
				<p className="offer-highlight">
					En moyenne, 3 semaines entre le choix du modèle et la mise en ligne.
				</p>
			</Reveal>
		</Section>
	);
}
