import './style.scss';

const CLASS_NAME = 'models';

const MODELS = [
	{
		slug: 'civique',
		name: 'Style Civique',
		text: 'Palette bleu institutionnel, sobre et rassurant. L’identité classique d’un site de collectivité, pour les communes qui veulent une image officielle et sans ambiguïté.',
		href: 'https://saint-hilaire-bonneval-demo.vercel.app/'
	},
	{
		slug: 'ludique',
		name: 'Style Ludique',
		text: 'Palette vive et chaleureuse, formes arrondies, mise en avant de la vie locale. Pour les communes qui veulent un site accueillant et proche de leurs habitants.',
		href: 'https://commune-ludique-style.vercel.app/'
	},
	{
		slug: 'prestige',
		name: 'Style Prestige',
		text: 'Palette sobre et raffinée, teintes naturelles. Pour les communes qui veulent mettre en valeur leur patrimoine avec une identité haut de gamme.',
		href: 'https://commune-prestige-style-demo.vercel.app/'
	}
];

export default function Models() {
	return (
		<section className="section section--blue" id="modeles">
			<div className="container">
				<div className="entete">
					<p className="badge badge--light">Les modèles</p>
					<h2>Trois identités, pensées pour rester simples à comprendre.</h2>
					<p>
						La structure des pages reste la même d&apos;une commune à l&apos;autre — c&apos;est
						le style qui distingue votre site : couleurs, ambiance, typographie. Chaque style
						se décline ensuite à vos couleurs, votre blason et vos photographies.
					</p>
					<p>
						Beaucoup de sites de mairies sont devenus trop compliqués : menus surchargés,
						information difficile à trouver, démarches noyées sous les rubriques. Ici, le
						travail a été fait en amont pour que chaque habitant comprenne en un coup
						d&apos;œil où cliquer, quel que soit le style choisi.
					</p>
				</div>

				<div className="grid grid--3">
					{MODELS.map((model) => (
						<a
							key={model.slug}
							className={CLASS_NAME}
							href={model.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<article>
								<div
									className={`${CLASS_NAME}__preview ${CLASS_NAME}__preview--${model.slug}`}
									role="img"
									aria-label={`Aperçu du ${model.name}`}
								/>
								<div className={`${CLASS_NAME}__body`}>
									<h3>{model.name}</h3>
									<p>{model.text}</p>
									<p className={`${CLASS_NAME}__variants`}>Voir la démo en ligne →</p>
								</div>
							</article>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
