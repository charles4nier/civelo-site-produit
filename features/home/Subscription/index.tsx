import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const ITEMS = [
	{
		title: 'Hébergement en France',
		text: (
			<>
				Votre site est hébergé sur une infrastructure certifiée SecNumCloud par l&apos;ANSSI,
				en France. Les données de la commune restent sur le territoire national.
			</>
		)
	},
	{
		title: 'Sécurité et mises à jour',
		text: (
			<>
				Nous appliquons les mises à jour de sécurité en continu et surveillons la
				disponibilité de votre site. Vous n&apos;avez jamais à vous en préoccuper.
			</>
		)
	},
	{
		title: 'Sauvegardes',
		text: (
			<>
				Votre site est sauvegardé chaque jour, et chaque sauvegarde est conservée 30 jours.
				En cas de problème, nous le restaurons.
			</>
		)
	},
	{
		title: 'Veille réglementaire',
		text: (
			<>
				Accessibilité, données personnelles, publication des actes : quand les règles
				évoluent, nous vous prévenons et adaptons le site dans le cadre de l&apos;abonnement.
			</>
		)
	},
	{
		title: 'Un interlocuteur qui connaît votre site',
		text: (
			<>
				Une question ? Écrivez-nous ou appelez le{' '}
				<a href="tel:+33649303664">06 49 30 36 64</a>. Réponse sous 48 h ouvrées, par une
				personne qui connaît votre commune, pas par une plateforme anonyme.
			</>
		)
	},
	{
		title: 'Liberté',
		text: (
			<>
				Résiliable avec 1 mois de préavis. Si vous arrêtez, vous repartez avec votre site,
				son code et vos données.
			</>
		)
	}
];

export default function Subscription() {
	return (
		<Section id="inclus" tinted>
			<Reveal>
				<Eyebrow>Les services inclus</Eyebrow>
				<SectionTitle>
					Puis 70 € TTC par mois. Nous gérons la technique, vous gérez votre commune.
				</SectionTitle>
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
					Sur un mandat complet de six ans, création et services compris : 8 530 € TTC, soit
					moins de 120 € par mois.
				</p>
			</Reveal>
		</Section>
	);
}
