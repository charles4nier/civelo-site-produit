import Section from '@shared/components/Section';
import Reveal from '@shared/components/Reveal';
import DemoRequestButton from '@shared/components/DemoRequestButton';
import CopyEmailLink from '@shared/components/CopyEmailLink';
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
					<DemoRequestButton className="btn-primary btn-primary--on-dark">
						Demander une démonstration
					</DemoRequestButton>
					<CopyEmailLink email="contact@civelo.fr" className="link-underline">
						Nous écrire
					</CopyEmailLink>
				</Reveal>
				<Reveal delay={220}>
					<p className="final-cta__note">Réponse sous 48 heures ouvrées</p>
				</Reveal>
			</div>
		</Section>
	);
}
