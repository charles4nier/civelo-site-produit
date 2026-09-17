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
					<SectionTitle>
						Les horaires de la mairie à 22 h. Le menu de la cantine le dimanche soir.
					</SectionTitle>
				</Reveal>
				<Reveal delay={120} className="prose-lead prose-lead--loose">
					<p>
						Vos habitants ne visitent pas le site de la commune par hasard. Ils cherchent
						une information précise, souvent en dehors des heures d&apos;ouverture : un
						horaire, un formulaire, la date du prochain conseil, les travaux prévus dans
						leur rue.
					</p>
					<p>
						Un site Civelo est construit autour de ces besoins réels : actualités, agenda,
						démarches, documents municipaux, informations pratiques, vie associative,
						location de salles.
					</p>
					<p>Des habitants mieux informés, et moins de questions répétitives au guichet.</p>
					<p className="prose-highlight">
						Pas besoin de partir d&apos;une page blanche : vous choisissez le modèle qui
						ressemble à votre commune, nous faisons le reste.
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
