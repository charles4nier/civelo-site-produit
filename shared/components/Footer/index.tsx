import Logo from '@shared/components/Logo';
import CopyEmailLink from '@shared/components/CopyEmailLink';
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
					<CopyEmailLink email="contact@civelo.fr" className={`${CLASS_NAME}__email`}>
						contact@civelo.fr
					</CopyEmailLink>
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
