import Image from 'next/image';
import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const ACTIONS = [
	'publier une actualité',
	'mettre à jour une page',
	'ajouter un document',
	'gérer l’agenda',
	'modifier une information pratique'
];

export default function Secretariat() {
	return (
		<Section>
			<div className="grid grid--split">
				<Reveal>
					<Eyebrow>Au quotidien</Eyebrow>
					<SectionTitle>Votre secrétariat garde la main.</SectionTitle>
					<div className="secretariat__figure">
						<Image
							src="/secretariat.jpg"
							alt="Secrétaire de mairie mettant à jour le site depuis l’interface d’administration"
							width={1408}
							height={1056}
						/>
					</div>
				</Reveal>
				<Reveal delay={120}>
					<p className="section-intro section-intro--flush secretariat__lines">
						{`Une fois le site livré, vous n'avez pas besoin de nous contacter pour publier chaque information.\nDepuis l'interface d'administration, votre secrétariat peut notamment :`}
					</p>
					<ul className="check-list">
						{ACTIONS.map((action) => (
							<li key={action}>{action}</li>
						))}
					</ul>
					<p className="section-intro section-intro--sm">
						L&apos;objectif : que les mises à jour courantes restent simples à réaliser,
						même sans compétence technique.
					</p>
				</Reveal>
			</div>
		</Section>
	);
}
