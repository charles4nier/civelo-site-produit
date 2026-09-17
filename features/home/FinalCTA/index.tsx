import Section from '@shared/components/Section';
import Reveal from '@shared/components/Reveal';
import DemoRequestButton from '@shared/components/DemoRequestButton';
import './style.scss';

export default function FinalCTA() {
	return (
		<Section id="contact" dark narrow>
			<div className="final-cta">
				<Reveal>
					<p className="final-cta__eyebrow">Prendre contact</p>
					<h2 className="final-cta__title">
						Voyons à quoi ressemblerait le site de votre commune.
					</h2>
					<p className="final-cta__lead">Deux façons d&apos;avancer, à votre rythme.</p>
				</Reveal>
				<Reveal delay={150} className="actions-row final-cta__actions">
					<DemoRequestButton className="btn-primary btn-primary--on-dark" variant="call">
						Un appel de 15 minutes
					</DemoRequestButton>
					<DemoRequestButton className="btn-outline btn-outline--on-dark" variant="demo">
						Une démonstration d&apos;une heure
					</DemoRequestButton>
				</Reveal>
				<Reveal delay={220}>
					<p className="final-cta__note">Sans engagement · Réponse sous 48 heures ouvrées</p>
				</Reveal>
			</div>
		</Section>
	);
}
