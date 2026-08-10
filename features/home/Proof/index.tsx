import './style.scss';

const CLASS_NAME = 'proof';

const PROOFS = [
	{ label: 'Accessibilité', value: "Conçu selon le RGAA 4.1 et sa méthode d'audit" },
	{ label: 'Hébergement', value: 'Serveurs en France, hors juridiction extraterritoriale' },
	{ label: 'Documents', value: "Déclaration, schéma pluriannuel et plan d'action fournis" },
	{ label: 'Réversibilité', value: 'Code, base et fichiers livrés sur simple demande' }
];

export default function Proof() {
	return (
		<section className={CLASS_NAME}>
			<dl className={`container ${CLASS_NAME}__grid`}>
				{PROOFS.map((proof) => (
					<div key={proof.label} className={`${CLASS_NAME}__item`}>
						<dt>{proof.label}</dt>
						<dd>{proof.value}</dd>
					</div>
				))}
			</dl>
		</section>
	);
}
