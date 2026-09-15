import Logo from '@shared/components/Logo';
import './style.scss';

const CLASS_NAME = 'footer';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__inner`}>
				<div className={`${CLASS_NAME}__top`}>
					<a className={`${CLASS_NAME}__brand`} href="/">
						<Logo />
						Civelo
					</a>
					<p className={`${CLASS_NAME}__tagline`}>
						Des sites internet pour les communes, hébergés en France.
					</p>
					<a className={`${CLASS_NAME}__email`} href="mailto:contact@civelo.fr">
						contact@civelo.fr
					</a>
				</div>
				<div className={`${CLASS_NAME}__bottom`}>
					<p className={`${CLASS_NAME}__credit`}>
						© {year} Civelo — Un produit de{' '}
						<a href="https://www.studioweb15.fr" target="_blank" rel="noopener noreferrer">
							Studio Web15
						</a>
					</p>
					<a className={`${CLASS_NAME}__legal-link`} href="/mentions-legales">
						Mentions légales
					</a>
				</div>
			</div>
		</footer>
	);
}
