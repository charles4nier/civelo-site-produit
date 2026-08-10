const BLOCKS = [
	{
		title: 'Trois documents obligatoires',
		text: "Une déclaration d'accessibilité indiquant votre niveau de conformité réel, un schéma pluriannuel de mise en accessibilité sur trois ans, et un plan d'action annuel. Ils doivent être publiés et tenus à jour."
	},
	{
		title: 'Une mention sur chaque page',
		text: "Chaque page doit porter la mention « Accessibilité : totalement, partiellement ou non conforme », renvoyant vers la déclaration. C'est le premier élément qu'un contrôle vérifie, et l'un des plus souvent absents."
	},
	{
		title: "La conformité n'est pas le tout ou rien",
		text: "Le référentiel prévoit trois niveaux. Une commune partiellement conforme qui publie honnêtement son taux et son plan d'action est en règle. Ce qui est reproché, c'est le silence, pas l'imperfection."
	},
	{
		title: 'La responsabilité reste à la commune',
		text: 'La déclaration est publiée au nom de la collectivité et l’engage. Nous la préparons, l’appuyons sur un audit réel et vous la remettons ; votre référent accessibilité la valide et la publie.'
	}
];

export default function Context() {
	return (
		<section className="section" id="contexte">
			<div className="container">
				<div className="entete">
					<p className="badge badge--brass">Le contexte</p>
					<h2>L&apos;accessibilité numérique n&apos;est pas une option pour une commune.</h2>
					<p>
						Les sites des collectivités territoriales sont soumis au Référentiel général
						d&apos;amélioration de l&apos;accessibilité. L&apos;obligation ne porte pas
						seulement sur le site : elle porte aussi sur les documents que vous devez
						publier.
					</p>
				</div>

				<div className="grid grid--2">
					{BLOCKS.map((block) => (
						<div key={block.title} className="block">
							<h3>{block.title}</h3>
							<p>{block.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
