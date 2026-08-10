import Section from '@shared/components/Section';
import './style.scss';

const CLASS_NAME = 'faq';

const QUESTIONS = [
	{
		q: "Comment la commune règle-t-elle l'abonnement ?",
		a: "Par mandat administratif, sur facture émise en euros avec TVA française. L'abonnement est facturé à terme échu — mensuellement ou trimestriellement, selon ce qui arrange votre secrétariat — conformément au principe du paiement après service fait."
	},
	{
		q: 'À qui appartient le site une fois livré ?',
		a: "À la commune. Le nom de domaine est déposé à son nom avec son SIRET dès le départ, les contenus lui appartiennent, et le site livré lui est cédé. Si vous changez de prestataire, nous vous remettons le code source, la base de données et les fichiers, sans frais."
	},
	{
		q: 'Faut-il passer par une mise en concurrence ?',
		a: "Les montants en jeu se situent très en deçà des seuils de procédure formalisée de la commande publique. Nous vous fournissons un devis détaillé et les pièces habituellement demandées ; votre secrétariat vérifiera le seuil applicable à votre situation."
	},
	{
		q: "Que se passe-t-il si nous arrêtons l'abonnement ?",
		a: "La prestation d'hébergement et de maintenance prend fin, et nous vous remettons l'intégralité du site pour que vous puissiez le faire héberger ailleurs. Ce que la commune a acheté lui reste acquis : nous ne retenons ni les contenus, ni le domaine, ni le code."
	},
	{
		q: 'Garantissez-vous une conformité RGAA totale ?',
		a: "Nous garantissons un socle conçu selon le référentiel et audité, les documents réglementaires rédigés et publiés, et un contrôle automatique à chaque publication. En revanche, les contenus que la mairie ajoute relèvent d'elle : un PDF scanné ou une image sans description dégrade la conformité. C'est pourquoi nous bloquons ces cas à la saisie et formons votre secrétariat."
	},
	{
		q: 'Notre secrétariat pourra-t-il publier seul ?',
		a: "Oui. L'interface ne présente que les champs nécessaires, avec des contrôles qui empêchent les erreurs les plus courantes. La formation dure deux heures et un guide écrit reste à disposition. Si vous préférez que nous publiions à votre place, c'est également possible."
	},
	{
		q: 'Que devient notre référencement Google ?',
		a: "Nous mettons en place les redirections depuis les adresses de votre ancien site, afin que les pages déjà indexées et les liens présents sur d'autres sites continuent de fonctionner."
	}
];

export default function FAQ() {
	return (
		<Section id="faq" tinted eyebrow="Questions fréquentes" title="Ce que demandent les secrétaires de mairie.">
			<div className={`${CLASS_NAME}__list`}>
				{QUESTIONS.map((item) => (
					<details key={item.q} className={`${CLASS_NAME}__item`}>
						<summary>
							{item.q}
							<span>+</span>
						</summary>
						<p>{item.a}</p>
					</details>
				))}
			</div>
		</Section>
	);
}
