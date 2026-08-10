import './style.scss';

const CLASS_NAME = 'offer';

const DELIVERABLES = [
	{
		ref: '01',
		title: 'Conception du site',
		text: 'Sur l’un de nos trois modèles, décliné à vos couleurs, votre blason et vos photographies. Structure adaptée à la façon dont un habitant cherche l’information, pas à l’organigramme de la mairie.'
	},
	{
		ref: '02',
		title: 'Reprise des contenus existants',
		text: 'Récupération, mise en forme et vérification des textes, délibérations et documents de votre site actuel.'
	},
	{
		ref: '03',
		title: 'Rubrique « Mes démarches » à jour du droit national',
		text: 'État civil, urbanisme, recensement, élections. Délais légaux et renvois vers les services officiels. Nous la maintenons ensuite pour vous.'
	},
	{
		ref: '04',
		title: 'Audit d’accessibilité et déclaration',
		text: 'Audit selon la méthode d’échantillonnage officielle, déclaration d’accessibilité rédigée, schéma pluriannuel et plan d’action de la première année.'
	},
	{
		ref: '05',
		title: 'Mentions légales et politique de confidentialité',
		text: 'Rédigées, publiées, et conformes à vos obligations d’éditeur de service public.'
	},
	{
		ref: '06',
		title: 'Formation du secrétariat',
		text: 'Deux heures sur site ou à distance, plus un guide de publication écrit. Ajouter une actualité doit prendre cinq minutes.'
	},
	{
		ref: '07',
		title: 'Nom de domaine et mise en ligne',
		text: 'Nous configurons le domaine au nom de la commune, le certificat de sécurité et les redirections depuis l’ancien site.'
	}
];

export default function Offer() {
	return (
		<section className="section section--dark" id="prestation">
			<div className="container">
				<div className="entete">
					<p className="badge badge--light">2 900 € — une seule fois</p>
					<h2>Ce que comprend la mise en ligne.</h2>
					<p>
						Un devis détaillé, ligne par ligne, présentable en conseil municipal. Aucune
						option cachée.
					</p>
				</div>

				<ul className={CLASS_NAME}>
					{DELIVERABLES.map((item) => (
						<li key={item.ref} className={`${CLASS_NAME}__item`}>
							<span className={`${CLASS_NAME}__ref`}>{item.ref}</span>
							<span>
								<strong>{item.title}</strong>
								<span>{item.text}</span>
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
