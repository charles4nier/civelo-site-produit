'use client';

import { useState } from 'react';
import Section from '@shared/components/Section';
import Eyebrow from '@shared/components/Eyebrow';
import SectionTitle from '@shared/components/SectionTitle';
import Reveal from '@shared/components/Reveal';
import './style.scss';

const QUESTIONS: { q: string; a: React.ReactNode }[] = [
	{
		q: 'Combien de temps faut-il pour créer notre site ?',
		a: (
			<>
				En moyenne 3 semaines entre le choix du modèle et la mise en ligne. Le calendrier
				dépend surtout du rythme de vos validations : nous nous adaptons aux disponibilités
				de la mairie.
			</>
		)
	},
	{
		q: 'Le prix peut-il varier selon notre commune ?',
		a: 'Non. Le tarif de 3 490 € TTC est le même pour toutes les communes, sans supplément.'
	},
	{
		q: 'Comment la commune règle-t-elle ?',
		a: "Par mandat administratif, sur facture émise en euros avec TVA française. Nos factures sont déposées sur Chorus Pro. L'abonnement est facturé à terme échu — mensuellement ou trimestriellement, selon ce qui arrange votre secrétariat — conformément au principe du paiement après service fait."
	},
	{
		q: 'Faut-il passer par une mise en concurrence ?',
		a: 'Le seuil de 40 000 € HT s’apprécie sur toute la durée du contrat. Même sur quatre ans, notre offre représente 6 850 € TTC, très en dessous. Pour ces montants, le Code de la commande publique n’impose ni publicité ni mise en concurrence préalables. La commune doit toutefois choisir une offre pertinente, faire une bonne utilisation des deniers publics et ne pas contracter systématiquement avec le même prestataire lorsque plusieurs offres peuvent répondre au besoin. Nous vous remettons un devis détaillé pour votre dossier.'
	},
	{
		q: "Que se passe-t-il si nous arrêtons l'abonnement ?",
		a: "La prestation d'hébergement et de maintenance prend fin, et nous vous remettons l'intégralité du site pour que vous puissiez le faire héberger ailleurs. Ce que la commune a acheté lui reste acquis : nous ne retenons ni les contenus, ni le domaine, ni le code."
	},
	{
		q: 'Où sont hébergées les données de la commune ?',
		a: "En France, sur une infrastructure qualifiée SecNumCloud par l'ANSSI — le niveau de qualification recherché par les administrations les plus exigeantes en matière de cybersécurité. Aucun transfert hors de l'Union européenne, aucun sous-traitant soumis au CLOUD Act américain : votre chaîne de traitement s'arrête en France, ce qui simplifie votre registre des traitements."
	},
	{
		q: 'Disposez-vous des documents RGPD nécessaires ?',
		a: "Oui. Un contrat de sous-traitance conforme à l'article 28 du RGPD, avec la liste des sous-traitants ultérieurs, la localisation des données et les durées de conservation — prêt à être versé à votre registre des traitements."
	},
	{
		q: 'Garantissez-vous une conformité RGAA totale ?',
		a: "Aucun prestataire honnête ne peut la garantir, car la conformité dépend aussi des contenus publiés au fil du temps (documents, images, vidéos). Nos modèles sont conçus et testés selon les critères du RGAA, votre secrétariat est formé aux bons réflexes, et nous vous accompagnons pour publier la déclaration d'accessibilité."
	},
	{
		q: 'Que devient notre référencement Google ?',
		a: "Nous mettons en place les redirections depuis les adresses de votre ancien site, afin que les pages déjà indexées et les liens présents sur d'autres sites continuent de fonctionner."
	},
	{
		q: 'Notre commune est à la fois rurale et touristique : quel modèle choisir ?',
		a: 'Les quatre modèles ont exactement les mêmes fonctionnalités. Choisissez celui dont la présentation met le mieux en valeur ce qui compte le plus pour vous. Nous en parlons ensemble lors du premier échange.'
	},
	{
		q: 'Sur quelle technologie le site est-il construit ?',
		a: "Sur Next.js, une technologie open source largement utilisée. Nous vous transmettons la documentation nécessaire pour qu'un autre professionnel puisse reprendre le site si besoin."
	},
	{
		q: 'Qui met à jour le site après la mise en ligne ?',
		a: 'Votre secrétariat, en toute autonomie, grâce à l’interface d’administration et à la formation incluse. Civelo reste disponible en cas de question.'
	}
];

export default function FAQ() {
	// Pattern "Disclosure" du WAI-ARIA Authoring Practices : un bouton natif
	// (focusable et activable au clavier sans rien ajouter) portant
	// aria-expanded + aria-controls, plutôt que <details>/<summary> — l'état
	// est ainsi explicite pour les lecteurs d'écran quel que soit le
	// navigateur, et l'icône +/− peut suivre l'état réel au lieu du
	// sélecteur CSS [open].
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<Section id="faq">
			<Reveal>
				<Eyebrow>Questions fréquentes</Eyebrow>
				<SectionTitle>Les questions des maires et des secrétaires de mairie.</SectionTitle>
			</Reveal>
			<div className="faq-list">
				{QUESTIONS.map((item, i) => {
					const isOpen = openIndex === i;
					const panelId = `faq-panel-${i}`;
					const buttonId = `faq-button-${i}`;
					return (
						<Reveal key={item.q} delay={i * 60}>
							<div className="faq-item">
								<h3 className="faq-item__heading">
									<button
										type="button"
										id={buttonId}
										className="faq-item__trigger"
										aria-expanded={isOpen}
										aria-controls={panelId}
										onClick={() => setOpenIndex(isOpen ? null : i)}
									>
										<span>{item.q}</span>
										<span className={`faq-item__icon${isOpen ? ' faq-item__icon--open' : ''}`} aria-hidden="true">
											+
										</span>
									</button>
								</h3>
								<div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
									<p>{item.a}</p>
								</div>
							</div>
						</Reveal>
					);
				})}
			</div>
		</Section>
	);
}
