import Image from 'next/image';
import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

export default function SiteMairie() {
	return (
		<Section>
			<div className="grid grid--split">
				<Reveal>
					<Eyebrow>Ce que vos habitants viennent chercher</Eyebrow>
					<SectionTitle>Un vrai site de mairie, prêt à l&apos;emploi.</SectionTitle>
				</Reveal>
				<Reveal delay={120} className="prose-lead prose-lead--loose">
					<p>
						Actualités, agenda, démarches, documents municipaux, informations pratiques,
						vie locale…
					</p>
					<p>
						Votre site est conçu autour des informations que les habitants viennent
						réellement chercher.
					</p>
					<p>
						Vous choisissez parmi trois modèles Civelo. Nous l&apos;adaptons ensuite à
						l&apos;identité de votre commune et reprenons avec vous les contenus utiles de
						votre site actuel.
					</p>
					<p className="prose-highlight">
						Pas besoin de partir d&apos;une page blanche ni de piloter un projet web
						complexe.
					</p>
				</Reveal>
			</div>
			<Reveal delay={200} className="site-mairie__figure">
				<Image
					src="/portail-citoyen.jpg"
					alt="Portail citoyen d’une commune affiché sur un ordinateur et une tablette : actualités, agenda et démarches"
					width={1408}
					height={1056}
				/>
			</Reveal>
		</Section>
	);
}
