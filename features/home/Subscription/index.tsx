import Section from '@shared/components/Section';
import InfoCard from '@shared/components/InfoCard';

const ITEMS = [
	{
		title: 'Hébergement en France',
		text: 'Infrastructure française certifiée, redondée, avec engagement de disponibilité. Sauvegardes quotidiennes et copie conservée hors du serveur principal.'
	},
	{
		title: 'Mises à jour de sécurité',
		text: 'Correctifs appliqués sur l’ensemble de notre parc dès leur publication. Vous n’avez rien à faire, rien à surveiller, rien à décider.'
	},
	{
		title: 'Contrôle d’accessibilité à la publication',
		text: 'Les erreurs les plus fréquentes sont bloquées à la saisie : image sans description, hiérarchie de titres cassée, PDF scanné sans texte, intitulé de lien vide de sens.'
	},
	{
		title: 'Veille réglementaire',
		text: 'Quand le référentiel ou une démarche administrative évolue, nous mettons à jour votre site. La rubrique « Mes démarches » suit le droit sans que vous ayez à la relire.'
	},
	{
		title: 'Suivi annuel de conformité',
		text: 'Contrôle du contenu publié dans l’année, mise à jour de la déclaration d’accessibilité et rédaction du plan d’action de l’année suivante.'
	},
	{
		title: 'Assistance',
		text: 'Par téléphone et par courriel, en français, aux horaires d’ouverture d’une mairie. Vous parlez à la personne qui a construit votre site.'
	}
];

export default function Subscription() {
	return (
		<Section
			eyebrow="59 € par mois"
			title="Puis nous nous en occupons."
			intro={
				<p>
					Un site de commune se dégrade par le contenu, pas par le code. L&apos;abonnement
					paie le travail qui maintient votre conformité dans le temps.
				</p>
			}
		>
			<div className="grid grid--3">
				{ITEMS.map((item) => (
					<InfoCard key={item.title} title={item.title}>
						{item.text}
					</InfoCard>
				))}
			</div>
		</Section>
	);
}
