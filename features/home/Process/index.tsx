import './style.scss';

const CLASS_NAME = 'process';

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
		<section className="section" id="deroulement">
			<div className="container">
				<div className="entete">
					<p className="badge badge--brass">Déroulement</p>
					<h2>De la première réunion à la mise en ligne.</h2>
					<p>Une séquence courte, calée sur le rythme d&apos;un conseil municipal.</p>
				</div>

				<ol className={CLASS_NAME}>
					{STEPS.map((step) => (
						<li key={step.num} className={`${CLASS_NAME}__step`}>
							<span className={`${CLASS_NAME}__num`}>{step.num}</span>
							<div>
								<h3>{step.title}</h3>
								<p>{step.text}</p>
								<span className={`${CLASS_NAME}__delay`}>{step.delay}</span>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
