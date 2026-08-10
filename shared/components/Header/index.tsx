import './style.scss';

const CLASS_NAME = 'header';

const NAV_LINKS = [
	{ href: '#prestation', label: 'La prestation' },
	{ href: '#modeles', label: 'Les modèles' },
	{ href: '#hebergement', label: 'Hébergement' },
	{ href: '#deroulement', label: 'Déroulement' },
	{ href: '#questions', label: 'Questions' }
];

export default function Header() {
	return (
		<header className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__inner`}>
				<a className={`${CLASS_NAME}__brand`} href="/">
					Commune<span>.</span>site
				</a>
				<nav className={`${CLASS_NAME}__nav`} aria-label="Navigation principale">
					{NAV_LINKS.map((link) => (
						<a key={link.href} href={link.href}>
							{link.label}
						</a>
					))}
				</nav>
				<a className="btn btn--solid" href="#contact">
					Demander une démonstration
				</a>
			</div>
		</header>
	);
}
