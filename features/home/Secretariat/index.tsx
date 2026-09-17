import Image from 'next/image';
import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const ACTIONS = [
	'publier une actualité ou un arrêté',
	'mettre à jour une page',
	'ajouter un document',
	'gérer l’agenda des manifestations',
	'modifier une information pratique'
];

export default function Secretariat() {
	return (
		<Section>
			<div className="grid grid--split">
				<Reveal>
					<Eyebrow>Au quotidien</Eyebrow>
					<SectionTitle>
						Mardi, 11 h. L&apos;arrêté de fermeture de la route est en ligne.
					</SectionTitle>
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
						{`Entre deux dossiers d'état civil, votre secrétaire publie l'information. Cinq minutes plus tard, les habitants la trouvent sur le site. Pas besoin de nous appeler, pas besoin de compétence technique.\nDepuis l'interface d'administration, votre secrétariat peut :`}
					</p>
					<ul className="check-list">
						{ACTIONS.map((action) => (
							<li key={action}>{action}</li>
						))}
					</ul>
					<p className="section-intro section-intro--sm">
						Et si un doute persiste, un message à contact@civelo.fr suffit.
					</p>
				</Reveal>
			</div>
		</Section>
	);
}
