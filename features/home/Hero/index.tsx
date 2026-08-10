import './style.scss';

const CLASS_NAME = 'hero';

export default function Hero() {
	return (
		<section className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__grid`}>
				<div>
					<p className={`badge fade-up ${CLASS_NAME}__eyebrow`}>Sites internet de communes</p>
					<h1 className={`fade-up ${CLASS_NAME}__title`}>
						Le site de votre commune, <em>conforme</em> et tenu à jour.
					</h1>
					<p className={`fade-up ${CLASS_NAME}__lead`}>
						Conception, hébergement en France et accessibilité numérique. Nous livrons le
						site, les documents réglementaires et la formation de votre secrétariat.
					</p>
					<div className={`fade-up ${CLASS_NAME}__actions`}>
						<a className="btn btn--solid" href="#contact">
							Demander une démonstration
						</a>
						<a className="btn btn--outline" href="#prestation">
							Voir ce qui est compris
						</a>
					</div>
					<p className={`fade-up ${CLASS_NAME}__note`}>
						Conçu pour les communes de moins de 5 000 habitants
					</p>
				</div>

				<div className={`fade-up ${CLASS_NAME}__quote`}>
					<p className={`${CLASS_NAME}__quote-title`}>Tarif — commune rurale</p>
					<div className={`${CLASS_NAME}__quote-line`}>
						<span className={`${CLASS_NAME}__quote-label`}>
							Conception et mise en ligne
							<span className={`${CLASS_NAME}__quote-detail`}>
								Une seule fois. Dépense d&apos;investissement.
							</span>
						</span>
						<span className={`${CLASS_NAME}__quote-price`}>
							2 900 €<small>à la livraison</small>
						</span>
					</div>
					<div className={`${CLASS_NAME}__quote-line`}>
						<span className={`${CLASS_NAME}__quote-label`}>
							Hébergement, maintenance et veille
							<span className={`${CLASS_NAME}__quote-detail`}>
								Facturé à terme échu, mensuel ou trimestriel.
							</span>
						</span>
						<span className={`${CLASS_NAME}__quote-price`}>
							59 €<small>par mois</small>
						</span>
					</div>
					<p className={`${CLASS_NAME}__quote-footer`}>
						La commune reste propriétaire de son nom de domaine, de ses contenus et du site
						livré. Aucun frais de sortie, aucune rétention de données.
					</p>
				</div>
			</div>
		</section>
	);
}
