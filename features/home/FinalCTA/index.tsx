import Section from '@shared/components/Section';
import './style.scss';

const CLASS_NAME = 'final-cta';

export default function FinalCTA() {
	return (
		<Section
			id="contact"
			eyebrow="Prendre contact"
			title="Voyons ce que donnerait le site de votre commune."
			intro={
				<p>
					Une démonstration d&apos;une heure, sans engagement. Nous vous montrons un site
					existant et repartons avec vos contenus actuels pour vous remettre un devis
					précis.
				</p>
			}
		>
			<div className={CLASS_NAME}>
				<a className="btn-primary" href="mailto:contact@exemple.fr">
					Demander une démonstration
				</a>
				<a className="btn-link" href="tel:+33000000000">
					Nous appeler
				</a>
				<span>Réponse sous 48 heures ouvrées</span>
			</div>
		</Section>
	);
}
