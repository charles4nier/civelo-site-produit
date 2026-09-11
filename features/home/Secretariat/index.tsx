import Section from '@shared/components/Section';

const ACTIONS = [
	'publier une actualité',
	'mettre à jour une page',
	'ajouter un document',
	'gérer l’agenda',
	'modifier une information pratique'
];

export default function Secretariat() {
	return (
		<Section
			eyebrow="Au quotidien"
			title="Votre secrétariat garde la main."
			intro={
				<>
					<p>
						Une fois le site livré, vous n&apos;avez pas besoin de nous contacter pour
						publier chaque information.
					</p>
					<p>Depuis l&apos;interface d&apos;administration, votre secrétariat peut notamment :</p>
				</>
			}
		>
			<ul className="check-list">
				{ACTIONS.map((action) => (
					<li key={action}>{action}</li>
				))}
			</ul>
			<p>
				L&apos;objectif : que les mises à jour courantes restent simples à réaliser, même sans
				compétence technique.
			</p>
		</Section>
	);
}
