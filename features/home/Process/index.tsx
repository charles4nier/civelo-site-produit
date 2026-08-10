import Section from '@shared/components/Section';
import NumberedRow from '@shared/components/NumberedRow';

const STEPS = [
	{
		num: '01',
		title: 'Démonstration et choix du modèle',
		text: 'Une heure, sur place ou à distance. Nous montrons un site existant, vous choisissez la structure et les couleurs. Nous repartons avec la liste de vos contenus actuels.',
		delay: '1 réunion'
	},
	{
		num: '02',
		title: 'Devis et délibération',
		text: 'Nous remettons un devis détaillé, ligne par ligne, directement présentable en conseil. La dépense de conception relève de l’investissement, l’abonnement du fonctionnement.',
		delay: 'Selon votre calendrier de conseil'
	},
	{
		num: '03',
		title: 'Conception et reprise des contenus',
		text: 'Nous montons le site, reprenons vos textes et documents, et vous soumettons une version de recette que vous pouvez faire relire par vos adjoints.',
		delay: '3 à 4 semaines'
	},
	{
		num: '04',
		title: 'Audit, formation, mise en ligne',
		text: 'Audit d’accessibilité, publication des documents réglementaires, formation du secrétariat, bascule du nom de domaine et redirections depuis l’ancien site.',
		delay: '1 semaine'
	}
];

export default function Process() {
	return (
		<Section
			eyebrow="Déroulement"
			title="De la première réunion à la mise en ligne."
			intro={<p>Une séquence courte, calée sur le rythme d&apos;un conseil municipal.</p>}
		>
			<ol className="bordered-list">
				{STEPS.map((step) => (
					<NumberedRow key={step.num} index={step.num} title={step.title} meta={step.delay}>
						{step.text}
					</NumberedRow>
				))}
			</ol>
		</Section>
	);
}
