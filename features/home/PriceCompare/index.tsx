import Section from '@shared/components/Section';
import './style.scss';

const CLASS_NAME = 'price-cards';

export default function PriceCompare() {
	return (
		<Section
			tinted
			eyebrow="Le prix, en clair"
			title="Un socle déjà éprouvé, pas un site reparti de zéro."
			intro={
				<p>
					Nous avons développé une base spécialisée pour les communes rurales, déjà
					auditée en accessibilité. Vous ne payez pas la conception d&apos;un site : vous
					payez son adaptation à votre commune et sa mise en conformité.
				</p>
			}
		>
			<div className={`grid grid--3 ${CLASS_NAME}`}>
				<div className={`card-soft ${CLASS_NAME}__item ${CLASS_NAME}__item--us`}>
					<p className={`${CLASS_NAME}__label`}>Notre prestation</p>
					<p className={`${CLASS_NAME}__detail`}>Conception, conformité, formation</p>
					<p className={`${CLASS_NAME}__amount ${CLASS_NAME}__amount--accent`}>2 900 €</p>
				</div>
				<div className={`card-soft ${CLASS_NAME}__item`}>
					<p className={`${CLASS_NAME}__label`}>Devis constatés</p>
					<p className={`${CLASS_NAME}__detail`}>Agences généralistes, prestation seule</p>
					<p className={`${CLASS_NAME}__amount`}>à partir de 5 000 €</p>
				</div>
				<div className={`card-soft ${CLASS_NAME}__item`}>
					<p className={`${CLASS_NAME}__label`}>Devis constatés</p>
					<p className={`${CLASS_NAME}__detail`}>Agences spécialisées collectivités</p>
					<p className={`${CLASS_NAME}__amount`}>jusqu&apos;à 11 000 €</p>
				</div>
			</div>
			<p className={`${CLASS_NAME}__note`}>
				Fourchettes relevées sur des devis présentés à des communes comparables. Demandez à
				tout prestataire consulté de s&apos;engager par écrit sur la conformité RGAA de sa
				livraison — la question est rarement posée.
			</p>
		</Section>
	);
}
