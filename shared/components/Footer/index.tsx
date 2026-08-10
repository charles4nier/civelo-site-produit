import './style.scss';

const CLASS_NAME = 'footer';

export default function Footer() {
	return (
		<footer className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__inner`}>
				<p>Commune.site — sites internet pour collectivités territoriales</p>
				<ul>
					<li>
						<a href="#">Mentions légales</a>
					</li>
					<li>
						<a href="#">Politique de confidentialité</a>
					</li>
					<li>
						<a href="#">Accessibilité : partiellement conforme</a>
					</li>
					<li>
						<a href="#">Plan du site</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
