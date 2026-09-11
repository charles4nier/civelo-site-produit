import './style.scss';

const CLASS_NAME = 'footer';

export default function Footer() {
	return (
		<footer className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__inner`}>
				<p className={`${CLASS_NAME}__brand`}>Civelo</p>
				<p className={`${CLASS_NAME}__tagline`}>
					Accessibilité : partiellement conforme · Hébergement en France
				</p>
			</div>
		</footer>
	);
}
