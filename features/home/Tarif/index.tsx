import './style.scss';

const CLASS_NAME = 'tarif';

const GARANTIES = [
	{ t: 'Accessibilité', d: 'Conçu selon le RGAA 4.1 et sa méthode d’audit' },
	{ t: 'Hébergement', d: 'Serveurs en France, hors juridiction extraterritoriale' },
	{ t: 'Documents', d: 'Déclaration, schéma pluriannuel et plan d’action fournis' },
	{ t: 'Réversibilité', d: 'Code, base et fichiers livrés sur simple demande' }
];

export default function Tarif() {
	return (
		<section id="tarif" className={CLASS_NAME}>
			<div className="container">
				<p className="eyebrow">Tarif — petite commune</p>
				<div className={`${CLASS_NAME}__cards`}>
					<div className={`card-soft ${CLASS_NAME}__card`}>
						<div>
							<h2>Conception et mise en ligne</h2>
							<p className={`${CLASS_NAME}__card-detail`}>
								Une seule fois. Dépense d&apos;investissement.
							</p>
						</div>
						<p className={`${CLASS_NAME}__price`}>
							2 900 € TTC <span>à la livraison</span>
						</p>
					</div>
					<div className={`card-soft ${CLASS_NAME}__card`}>
						<div>
							<h2>Hébergement, maintenance et veille</h2>
							<p className={`${CLASS_NAME}__card-detail`}>
								Facturé à terme échu, mensuel ou trimestriel.
							</p>
						</div>
						<p className={`${CLASS_NAME}__price`}>
							59 € TTC <span>par mois</span>
						</p>
					</div>
				</div>
				<p className={`${CLASS_NAME}__note`}>
					Tarifs TTC. La commune reste propriétaire de son nom de domaine, de ses contenus
					et du site livré. Aucun frais de sortie, aucune rétention de données.
				</p>
				<dl className={`${CLASS_NAME}__garanties`}>
					{GARANTIES.map((g) => (
						<div key={g.t}>
							<dt>{g.t}</dt>
							<dd>{g.d}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
