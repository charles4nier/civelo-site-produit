import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

export default function Obligations() {
	return (
		<Section tinted>
			<div className="grid grid--split">
				<Reveal>
					<Eyebrow>Conçu pour une collectivité</Eyebrow>
					<SectionTitle>Un site de mairie, avec les obligations d&apos;une mairie.</SectionTitle>
				</Reveal>
				<Reveal delay={120} className="prose-lead prose-lead--loose">
					<div>
						<h3 className="obligations__heading">Accessibilité numérique</h3>
						<p>
							En tant que service public, votre site est soumis au RGAA. Nos modèles sont
							conçus selon ses critères, et nous vous accompagnons pour publier la
							déclaration d&apos;accessibilité.
						</p>
					</div>
					<div>
						<h3 className="obligations__heading">Données personnelles</h3>
						<p>
							Formulaires de contact, réservations de salles, inscriptions : nous vous
							fournissons le contrat de sous-traitance conforme à l&apos;article 28 du
							RGPD, les mentions légales et la politique de confidentialité adaptés à votre
							site.
						</p>
					</div>
				</Reveal>
			</div>
		</Section>
	);
}
