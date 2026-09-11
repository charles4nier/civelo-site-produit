import Section from '@shared/components/Section';
import Reveal from '@shared/components/Reveal';
import './style.scss';

export default function FinalCTA() {
	return (
		<Section id="contact" dark narrow>
			<div className="final-cta">
				<Reveal>
					<p className="final-cta__eyebrow">Prendre contact</p>
					<h2 className="final-cta__title">
						Voyons ce que donnerait le site de votre commune.
					</h2>
					<p className="final-cta__lead">
						Une démonstration d&apos;une heure, sans engagement. Nous vous montrons un site
						existant et repartons avec vos contenus actuels pour vous remettre un devis
						précis.
					</p>
				</Reveal>
				<Reveal delay={150} className="actions-row final-cta__actions">
					<a className="btn-primary btn-primary--on-dark" href="mailto:contact@civelo.fr">
						Demander une démonstration
					</a>
					<a className="link-underline" href="tel:+33000000000">
						Nous appeler
					</a>
				</Reveal>
				<Reveal delay={220}>
					<p className="final-cta__note">Réponse sous 48 heures ouvrées</p>
				</Reveal>
			</div>
		</Section>
	);
}
