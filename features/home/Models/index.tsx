import Image from 'next/image';
import Section from '@shared/components/Section';
import './style.scss';

const CLASS_NAME = 'model-card';

const MODELS = [
	{
		slug: 'edito',
		// Image conservée sous son ancien nom de fichier (public/civique.jpg) —
		// seuls le nom affiché et le lien de démo changent.
		image: 'civique',
		name: 'Édito',
		text: 'Une présentation sobre et institutionnelle qui met en avant les informations municipales et les actualités.',
		href: 'https://edito.civelo.fr/'
	},
	{
		slug: 'accueillant',
		image: 'ludique',
		name: 'Accueillant',
		text: 'Une présentation plus visuelle pour mettre en valeur la commune, sa vie locale et ses services.',
		href: 'https://accueillant.civelo.fr/'
	},
	{
		slug: 'app',
		image: 'prestige',
		name: 'App',
		text: 'Une navigation directe et moderne, pensée pour permettre aux habitants de trouver rapidement l’information recherchée.',
		href: 'https://app.civelo.fr/'
	}
];

export default function Models() {
	return (
		<Section
			id="modeles"
			tinted
			eyebrow="Les modèles"
			title="Choisissez le site qui ressemble à votre commune."
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
								src={`/${model.image}.jpg`}
								alt={`Aperçu du modèle ${model.name}`}
								fill
								sizes="(min-width: 1024px) 33vw, 100vw"
							/>
						</div>
						<div className={`${CLASS_NAME}__body`}>
							<h3>{model.name}</h3>
							<p>{model.text}</p>
							<span>Voir la démo →</span>
						</div>
					</a>
				))}
			</div>
			<p className={`${CLASS_NAME}__note`}>
				Les trois modèles disposent des mêmes fonctionnalités. La différence se trouve
				principalement dans leur présentation et leur navigation.
			</p>
		</Section>
	);
}
