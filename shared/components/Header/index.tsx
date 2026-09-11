import './style.scss';

const CLASS_NAME = 'header';

const NAV_LINKS = [
	{ href: '#prestation', label: 'Prestation' },
	{ href: '#modeles', label: 'Modèles' },
	{ href: '#tarif', label: 'Tarif' },
	{ href: '#faq', label: 'Questions' }
];

export default function Header() {
	return (
		<header className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__inner`}>
				<a className={`${CLASS_NAME}__brand`} href="/">
					Civelo
				</a>
				<nav className={`${CLASS_NAME}__nav`} aria-label="Navigation principale">
					{NAV_LINKS.map((link) => (
						<a key={link.href} href={link.href}>
							{link.label}
						</a>
					))}
				</nav>
				<a className="btn-primary btn-primary--sm" href="#contact">
					Demander une démonstration
				</a>
			</div>
		</header>
	);
}
