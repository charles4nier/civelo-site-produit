import './style.scss';

const CLASS_NAME = 'price-compare';

const BARS = [
	{
		key: 'us',
		label: 'Notre prestation',
		detail: 'Conception, conformité, formation',
		amount: '2 900 €',
		modifier: 'us'
	},
	{
		key: 'agency-general',
		label: 'Devis constatés',
		detail: 'Agences généralistes, prestation seule',
		amount: 'à partir de 5 000 €',
		modifier: 'a'
	},
	{
		key: 'agency-specialized',
		label: 'Devis constatés',
		detail: 'Agences spécialisées collectivités',
		amount: "jusqu'à 11 000 €",
		modifier: 'b'
	}
];

export default function PriceCompare() {
	return (
		<section className="section section--dark" id="prix">
			<div className="container">
				<div className="entete">
					<p className="badge badge--light">Le prix, en clair</p>
					<h2>Un socle déjà éprouvé, pas un site reparti de zéro.</h2>
					<p>
						Nous avons développé une base spécialisée pour les communes rurales, déjà
						auditée en accessibilité. Vous ne payez pas la conception d&apos;un site : vous
						payez son adaptation à votre commune et sa mise en conformité.
					</p>
				</div>

				<div className={CLASS_NAME}>
					{BARS.map((bar) => (
						<div key={bar.key} className={`${CLASS_NAME}__row`}>
							<span className={`${CLASS_NAME}__label`}>
								{bar.label}
								<small>{bar.detail}</small>
							</span>
							<div className={`${CLASS_NAME}__track`}>
								<div
									className={`${CLASS_NAME}__fill ${CLASS_NAME}__fill--${bar.modifier}`}
								>
									{bar.amount}
								</div>
							</div>
						</div>
					))}
				</div>

				<p className={`${CLASS_NAME}__note`}>
					Fourchettes relevées sur des devis présentés à des communes comparables. Demandez à
					tout prestataire consulté de s&apos;engager par écrit sur la conformité RGAA de sa
					livraison — la question est rarement posée.
				</p>
			</div>
		</section>
	);
}
