'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
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
	},
	{
		slug: 'classique',
		image: 'classique',
		name: 'Classique',
		text: 'Une présentation épurée et intemporelle, pensée pour rester lisible et sobre quelle que soit l’évolution du site.',
		href: 'https://classique.civelo.fr/'
	}
];

export default function Models() {
	const trackRef = useRef<HTMLDivElement>(null);

	// Fait défiler d'exactement une carte (largeur de la première carte +
	// l'écart entre cartes), pas d'une page entière — cohérent avec « 3
	// visibles, un défilement de 1 en 1 » sur desktop comme sur mobile (où
	// une seule carte est visible à la fois).
	const scrollByOneCard = (direction: 1 | -1) => {
		const track = trackRef.current;
		if (!track) return;
		const card = track.querySelector<HTMLElement>(`.${CLASS_NAME}`);
		if (!card) return;
		const gap = parseFloat(getComputedStyle(track).columnGap || '0');
		track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
	};

	return (
		<Section id="modeles" tinted>
			<Reveal>
				<div className={`${CLASS_NAME}__header`}>
					<div>
						<Eyebrow>Les modèles</Eyebrow>
						<SectionTitle>Choisissez le site qui ressemble à votre commune.</SectionTitle>
					</div>
					<div className={`${CLASS_NAME}__nav`}>
						<button
							type="button"
							className={`${CLASS_NAME}__nav-btn`}
							onClick={() => scrollByOneCard(-1)}
							aria-label="Modèle précédent"
						>
							<ChevronLeft size={18} aria-hidden="true" />
						</button>
						<button
							type="button"
							className={`${CLASS_NAME}__nav-btn`}
							onClick={() => scrollByOneCard(1)}
							aria-label="Modèle suivant"
						>
							<ChevronRight size={18} aria-hidden="true" />
						</button>
					</div>
				</div>
			</Reveal>

			<div className={`${CLASS_NAME}__track`} ref={trackRef}>
				{MODELS.map((model, i) => (
					<Reveal key={model.slug} as="article" delay={i * 110} className={`${CLASS_NAME}__slide`}>
						<a
							className={CLASS_NAME}
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
								<span className="link-arrow">Voir la démo →</span>
							</div>
						</a>
					</Reveal>
				))}
			</div>

			<Reveal delay={120}>
				<p className={`${CLASS_NAME}__note`}>
					Les quatre modèles disposent des mêmes fonctionnalités. La différence se trouve
					principalement dans leur présentation et leur navigation.
				</p>
			</Reveal>
		</Section>
	);
}
