import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';

export default function QuiSommesNous() {
	return (
		<Section id="qui-sommes-nous" tinted>
			<div className="grid grid--split">
				<Reveal>
					<Eyebrow>Qui sommes-nous</Eyebrow>
					<SectionTitle>Une équipe à taille humaine, qui connaît les petites communes.</SectionTitle>
				</Reveal>
				<Reveal delay={120} className="prose-lead">
					<p>Civelo est un produit de Studio Web15, agence web basée dans le Cantal.</p>
					<p>
						Nous avons constaté, sur le terrain, que les petites communes se retrouvaient
						souvent avec des sites généralistes, mal adaptés aux obligations d&apos;une
						collectivité et vite laissés à l&apos;abandon faute de temps. Civelo est né de
						cette expérience, avec un attachement particulier au monde rural.
					</p>
					<p className="prose-highlight">
						Quand vous nous appelez, vous parlez à quelqu&apos;un qui a travaillé sur votre
						site.
					</p>
				</Reveal>
			</div>
		</Section>
	);
}
