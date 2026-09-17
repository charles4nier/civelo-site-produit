import DemoRequestButton from '@shared/components/DemoRequestButton';
import Logo from '@shared/components/Logo';
import ToFill from '@shared/components/ToFill';
import './style.scss';

const CLASS_NAME = 'header';

const NAV_LINKS = [
	{ href: '#modeles', label: 'Les modèles' },
	{ href: '#inclus', label: 'Ce qui est inclus' },
	{ href: '#elus', label: 'Pour les élus' },
	{ href: '#faq', label: 'Questions' },
	{ href: '#qui-sommes-nous', label: 'Qui sommes-nous' }
];

export default function Header() {
	return (
		<header className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__inner`}>
				<a className={`${CLASS_NAME}__brand`} href="/">
					<Logo />
					Civelo
				</a>
				<nav className={`${CLASS_NAME}__nav`} aria-label="Navigation principale">
					{NAV_LINKS.map((link) => (
						<a key={link.href} href={link.href}>
							{link.label}
						</a>
					))}
				</nav>
				<div className={`${CLASS_NAME}__actions`}>
					<span className={`${CLASS_NAME}__phone`}>
						<ToFill>numéro à ajouter</ToFill>
					</span>
					<DemoRequestButton className="btn-primary btn-primary--sm" variant="call">
						Réserver un appel
					</DemoRequestButton>
				</div>
			</div>
		</header>
	);
}
