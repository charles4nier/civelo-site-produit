import './style.scss';

const CLASS_NAME = 'footer';

export default function Footer() {
	return (
		<footer className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__inner`}>
				<span className={`${CLASS_NAME}__brand`}>Civelo</span>
				<p className={`${CLASS_NAME}__tagline`}>Sites hébergés en France pour les communes</p>
				<a className={`${CLASS_NAME}__legal-link`} href="/mentions-legales">
					Mentions légales
				</a>
			</div>
		</footer>
	);
}
