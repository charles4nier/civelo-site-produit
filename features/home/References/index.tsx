import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import DemoRequestButton from '@shared/components/DemoRequestButton';

// Pas encore de témoignage client à publier : plutôt qu'une citation
// inventée, on propose aux premières communes de devenir « commune pilote »
// (voir note interne du brief éditorial).
export default function References() {
	return (
		<Section>
			<div className="grid grid--split">
				<Reveal>
					<Eyebrow>Devenez commune pilote</Eyebrow>
					<SectionTitle>Des communes comme la vôtre.</SectionTitle>
				</Reveal>
				<Reveal delay={120} className="prose-lead">
					<p>
						Civelo est un produit jeune : nous n&apos;avons pas encore de témoignage à vous
						montrer.
					</p>
					<p>
						En échange de votre retour d&apos;expérience, les premières communes qui nous
						font confiance bénéficient d&apos;un accompagnement renforcé pendant la
						création et la mise en ligne du site.
					</p>
				</Reveal>
			</div>
			<Reveal delay={140} className="actions-row">
				<DemoRequestButton className="btn-outline" variant="call">
					Devenir commune pilote →
				</DemoRequestButton>
			</Reveal>
		</Section>
	);
}
