import './style.scss';

const CLASS_NAME = 'final-cta';

export default function FinalCTA() {
	return (
		<section className={`section section--blue ${CLASS_NAME}`} id="contact">
			<div className="container">
				<p className="badge badge--light">Prendre contact</p>
				<h2 className={`${CLASS_NAME}__title`}>
					Voyons ce que donnerait le site de votre commune.
				</h2>
				<p className={`${CLASS_NAME}__lead`}>
					Une démonstration d&apos;une heure, sans engagement. Nous vous montrons un site
					existant et repartons avec vos contenus actuels pour vous remettre un devis
					précis.
				</p>
				<div className={`${CLASS_NAME}__actions`}>
					<a className="btn btn--brass" href="mailto:contact@exemple.fr">
						Demander une démonstration
					</a>
					<a className="btn btn--outline" href="tel:+33000000000">
						Nous appeler
					</a>
				</div>
				<p className={`${CLASS_NAME}__note`}>Réponse sous 48 heures ouvrées</p>
			</div>
		</section>
	);
}
