import { Landmark, Server, Code2, Database } from 'lucide-react';
import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const CLASS_NAME = 'reversibilite';

const POINTS = [
	{ Icon: Landmark, label: 'Votre site.' },
	{ Icon: Server, label: 'Votre administration.' },
	{ Icon: Code2, label: 'Votre code.' },
	{ Icon: Database, label: 'Vos données.' }
];

export default function Reversibilite() {
	return (
		<Section id="reversibilite" dark>
			<div className="grid grid--split">
				<Reveal>
					<Eyebrow dark>La propriété du site</Eyebrow>
					<SectionTitle dark>Ce site appartient à votre commune. Pas à nous.</SectionTitle>
				</Reveal>
				<Reveal delay={120} className="prose-lead prose-lead--on-dark">
					<p>Les 3 490 € ne paient pas un droit d&apos;accès : vous achetez réellement votre site.</p>
					<p className="text-strong-on-dark">
						La commune est propriétaire du site, de son interface d&apos;administration, de
						son code source et de ses données.
					</p>
					<p>Le nom de domaine reste enregistré au nom de la commune.</p>
					<p>
						Et si un jour vous souhaitez changer de prestataire, nous vous remettons le code
						source, la base de données, les fichiers et la documentation technique. Le site
						est développé avec Next.js, une technologie open source largement utilisée, ce
						qui permet à un autre professionnel de le reprendre.
					</p>
				</Reveal>
			</div>
			<Reveal delay={200}>
				<p className={`${CLASS_NAME}__statement`}>
					Votre site. Votre administration. Votre code. Vos données.
				</p>
			</Reveal>
			<div className={`grid grid--4 ${CLASS_NAME}__grid`}>
				{POINTS.map(({ Icon, label }, i) => (
					<Reveal key={label} delay={260 + i * 90}>
						<div className={`${CLASS_NAME}__card`}>
							<Icon aria-hidden strokeWidth={1.25} size={28} />
							<span>{label}</span>
						</div>
					</Reveal>
				))}
			</div>
		</Section>
	);
}
