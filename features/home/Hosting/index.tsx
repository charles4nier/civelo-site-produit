import Section from '@shared/components/Section';
import InfoCard from '@shared/components/InfoCard';

const BLOCKS = [
	{
		title: 'Hébergeur français, certifié',
		text: 'Serveurs situés en France, opérés par un prestataire français certifié ISO 27001 et agréé hébergeur de données de santé. Infrastructure redondée avec engagement contractuel de disponibilité.'
	},
	{
		title: 'Aucun transfert hors Union européenne',
		text: "Pas de dépendance à un cadre de transfert international, pas de sous-traitant soumis au CLOUD Act. Votre chaîne de traitement s'arrête en France, ce qui simplifie votre registre."
	},
	{
		title: 'Sous-traitance RGPD documentée',
		text: "Contrat de sous-traitance conforme à l'article 28 du règlement, liste des sous-traitants ultérieurs, localisation des données et durées de conservation. Prêt à être versé à votre registre des traitements."
	},
	{
		title: 'Réversibilité contractuelle',
		text: 'À tout moment et sans frais, nous vous remettons l’intégralité du site : code source, base de données et fichiers. Le nom de domaine est déposé à votre nom depuis le premier jour.'
	}
];

export default function Hosting() {
	return (
		<Section
			eyebrow="Souveraineté"
			title="Vos données restent en France."
			intro={
				<p>
					Les données de vos administrés — formulaires de contact, signalements,
					inscriptions — ne quittent pas le territoire national et ne relèvent d&apos;aucune
					législation extraterritoriale.
				</p>
			}
		>
			<div className="grid grid--2">
				{BLOCKS.map((block) => (
					<InfoCard key={block.title} title={block.title}>
						{block.text}
					</InfoCard>
				))}
			</div>
		</Section>
	);
}
