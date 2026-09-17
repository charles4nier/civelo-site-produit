import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';

export default function Accessibilite() {
	return (
		<Section id="accessibilite" tinted>
			<div className="grid grid--split">
				<Reveal>
					<Eyebrow>Accessibilité numérique</Eyebrow>
					<SectionTitle>Un site que tous vos habitants peuvent utiliser.</SectionTitle>
				</Reveal>
				<Reveal delay={120} className="prose-lead">
					<p>
						Votre doyenne qui agrandit les textes. Un habitant malvoyant qui utilise un
						lecteur d&apos;écran. Un parent qui consulte le site d&apos;une main, sur son
						téléphone. Le site de la commune doit fonctionner pour chacun d&apos;eux.
					</p>
					<p>
						Nos modèles sont construits et testés selon les critères du RGAA : contrastes,
						navigation au clavier, structure des pages, compatibilité avec les lecteurs
						d&apos;écran.
					</p>
					<p>
						L&apos;accessibilité se joue aussi au quotidien, dans les contenus que vous
						publiez. C&apos;est pourquoi la formation de votre secrétariat inclut les bons
						réflexes : description des images, documents lisibles, titres clairs.
					</p>
					<p>
						Nous vous accompagnons enfin pour rédiger et publier la déclaration
						d&apos;accessibilité, obligatoire pour toute commune.
					</p>
				</Reveal>
			</div>
		</Section>
	);
}
