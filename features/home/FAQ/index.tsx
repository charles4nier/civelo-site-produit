import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const QUESTIONS = [
	{
		q: "Comment la commune règle-t-elle l'abonnement ?",
		a: "Par mandat administratif, sur facture émise en euros avec TVA française. L'abonnement est facturé à terme échu — mensuellement ou trimestriellement, selon ce qui arrange votre secrétariat — conformément au principe du paiement après service fait."
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
		q: 'Où sont hébergées les données de la commune ?',
		a: "En France, sur une infrastructure certifiée SecNumCloud par l'ANSSI — le niveau de certification recherché par les administrations les plus exigeantes en matière de cybersécurité. Aucun transfert hors de l'Union européenne, aucun sous-traitant soumis au CLOUD Act américain : votre chaîne de traitement s'arrête en France, ce qui simplifie votre registre des traitements."
	},
	{
		q: 'Disposez-vous des documents RGPD nécessaires ?',
		a: "Oui. Un contrat de sous-traitance conforme à l'article 28 du RGPD, avec la liste des sous-traitants ultérieurs, la localisation des données et les durées de conservation — prêt à être versé à votre registre des traitements."
	},
	{
		q: 'Garantissez-vous une conformité RGAA totale ?',
		a: "Nous garantissons un socle conçu selon le référentiel et audité, les documents réglementaires rédigés et publiés, et un contrôle automatique à chaque publication. En revanche, les contenus que la mairie ajoute relèvent d'elle : un PDF scanné ou une image sans description dégrade la conformité. C'est pourquoi nous bloquons ces cas à la saisie et formons votre secrétariat."
	},
	{
		q: 'Que devient notre référencement Google ?',
		a: "Nous mettons en place les redirections depuis les adresses de votre ancien site, afin que les pages déjà indexées et les liens présents sur d'autres sites continuent de fonctionner."
	}
];

export default function FAQ() {
	return (
		<Section id="faq">
			<Reveal>
				<Eyebrow>Questions fréquentes</Eyebrow>
				<SectionTitle>Ce que demandent les secrétaires de mairie.</SectionTitle>
			</Reveal>
			<div className="faq-list">
				{QUESTIONS.map((item, i) => (
					<Reveal key={item.q} delay={i * 60}>
						<details className="faq-item">
							<summary>
								<span>{item.q}</span>
								<span className="faq-item__icon" aria-hidden>
									+
								</span>
							</summary>
							<p>{item.a}</p>
						</details>
					</Reveal>
				))}
			</div>
		</Section>
	);
}
