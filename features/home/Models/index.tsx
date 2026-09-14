'use client';

import { useEffect, useRef, useState } from 'react';
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
		slug: 'moderne',
		image: 'prestige',
		name: 'Moderne',
		text: 'Une navigation directe et moderne, pensée pour permettre aux habitants de trouver rapidement l’information recherchée.',
		href: 'https://moderne.civelo.fr/'
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
	const [activeIndex, setActiveIndex] = useState(0);
	// Nombre de positions de défilement réellement atteignables — pas un par
	// modèle : avec 3 cartes visibles sur desktop pour 4 modèles, il n'y a
	// que 2 positions possibles (0 et 1), donc 2 dots ; en mobile (1 carte
	// visible), les 4 positions existent, donc 4 dots. Mesuré dynamiquement
	// plutôt que codé en dur par breakpoint, pour rester juste à toute
	// largeur d'écran.
	const [dotsCount, setDotsCount] = useState(MODELS.length);
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);

	const step = () => {
		const track = trackRef.current;
		if (!track) return 0;
		const card = track.querySelector<HTMLElement>(`.${CLASS_NAME}`);
		if (!card) return 0;
		const gap = parseFloat(getComputedStyle(track).columnGap || '0');
		return card.offsetWidth + gap;
	};

	// Synchronise l'index actif et la visibilité des flèches sur la position
	// réelle de défilement — couvre aussi bien les clics sur les flèches/dots
	// que le glisser tactile ou le trackpad, sans dupliquer la logique.
	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;
		let raf = 0;
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const s = step();
				if (s > 0) {
					const maxIndex = Math.max(0, Math.round((track.scrollWidth - track.clientWidth) / s));
					setDotsCount(maxIndex + 1);
					const index = Math.round(track.scrollLeft / s);
					setActiveIndex(Math.min(Math.max(index, 0), maxIndex));
				}
				setAtStart(track.scrollLeft <= 2);
				setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 2);
			});
		};
		onScroll();
		track.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			track.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			cancelAnimationFrame(raf);
		};
	}, []);

	// Fait défiler d'exactement une carte (largeur de la première carte +
	// l'écart entre cartes) — une seule carte visible à la fois, sur tous
	// les écrans.
	const scrollByOneCard = (direction: 1 | -1) => {
		const track = trackRef.current;
		if (!track) return;
		track.scrollBy({ left: direction * step(), behavior: 'smooth' });
	};

	const scrollToIndex = (index: number) => {
		const track = trackRef.current;
		if (!track) return;
		track.scrollTo({ left: index * step(), behavior: 'smooth' });
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
							className={`${CLASS_NAME}__nav-btn${atStart ? ` ${CLASS_NAME}__nav-btn--hidden` : ''}`}
							onClick={() => scrollByOneCard(-1)}
							aria-hidden={atStart}
							tabIndex={atStart ? -1 : 0}
							aria-label="Modèle précédent"
						>
							<ChevronLeft size={18} aria-hidden="true" />
						</button>
						<button
							type="button"
							className={`${CLASS_NAME}__nav-btn${atEnd ? ` ${CLASS_NAME}__nav-btn--hidden` : ''}`}
							onClick={() => scrollByOneCard(1)}
							aria-hidden={atEnd}
							tabIndex={atEnd ? -1 : 0}
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

			<div className={`${CLASS_NAME}__dots`} role="tablist" aria-label="Aller au modèle">
				{Array.from({ length: dotsCount }, (_, i) => (
					<button
						key={i}
						type="button"
						role="tab"
						aria-selected={i === activeIndex}
						aria-label={`Modèles, position ${i + 1} sur ${dotsCount}`}
						className={`${CLASS_NAME}__dot${i === activeIndex ? ` ${CLASS_NAME}__dot--active` : ''}`}
						onClick={() => scrollToIndex(i)}
					/>
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
