import Image from 'next/image';
import Section from '@shared/components/Section';
import './style.scss';

const CLASS_NAME = 'model-card';

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
		<Section
			id="modeles"
			tinted
			eyebrow="Les modèles"
			title="Trois identités, pensées pour rester simples à comprendre."
			intro={
				<>
					<p>
						La structure des pages reste la même d&apos;une commune à l&apos;autre —
						c&apos;est le style qui distingue votre site : couleurs, ambiance, typographie.
						Chaque style se décline ensuite à vos couleurs, votre blason et vos
						photographies.
					</p>
					<p>
						Beaucoup de sites de mairies sont devenus trop compliqués : menus surchargés,
						information difficile à trouver, démarches noyées sous les rubriques. Ici, le
						travail a été fait en amont pour que chaque habitant comprenne en un coup
						d&apos;œil où cliquer, quel que soit le style choisi.
					</p>
				</>
			}
		>
			<div className="grid grid--3">
				{MODELS.map((model) => (
					<a
						key={model.slug}
						className={`card-soft ${CLASS_NAME}`}
						href={model.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className={`${CLASS_NAME}__image`}>
							<Image
								src={`/${model.slug}.jpg`}
								alt={`Aperçu du ${model.name}`}
								fill
								sizes="(min-width: 1024px) 33vw, 100vw"
							/>
						</div>
						<div className={`${CLASS_NAME}__body`}>
							<h3>{model.name}</h3>
							<p>{model.text}</p>
							<span>Voir la démo en ligne →</span>
						</div>
					</a>
				))}
			</div>
		</Section>
	);
}
