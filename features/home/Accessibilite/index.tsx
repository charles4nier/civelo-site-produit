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
					<SectionTitle>L&apos;accessibilité intégrée au projet.</SectionTitle>
				</Reveal>
				<Reveal delay={120} className="prose-lead">
					<p>
						Nous prenons en compte l&apos;accessibilité numérique dans la conception du site
						et réalisons les travaux prévus dans l&apos;offre pour accompagner la commune
						dans ses obligations.
					</p>
					<p>
						En tant que service public, le site de votre commune est soumis au RGAA
						(Référentiel Général d&apos;Amélioration de l&apos;Accessibilité) : nous nous
						appuyons sur ses critères pour construire les gabarits (contrastes, navigation au
						clavier, structure des pages) et vous accompagnons dans la déclaration
						d&apos;accessibilité à publier.
					</p>
					<p>
						Le site est conçu pour faciliter la consultation par le plus grand nombre, quels
						que soient l&apos;appareil ou les modalités de navigation utilisés.
					</p>
					<a className="link-arrow" href="#accessibilite">
						Voir notre démarche d&apos;accessibilité →
					</a>
				</Reveal>
			</div>
		</Section>
	);
}
