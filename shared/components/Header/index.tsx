import DemoRequestButton from '@shared/components/DemoRequestButton';
import './style.scss';

const CLASS_NAME = 'header';

const NAV_LINKS = [
	{ href: '#modeles', label: 'Modèles' },
	{ href: '#prestation', label: 'Prestation' },
	{ href: '#faq', label: 'Questions' }
];

export default function Header() {
	return (
		<header className={CLASS_NAME}>
			<div className={`container ${CLASS_NAME}__inner`}>
				<a className={`${CLASS_NAME}__brand`} href="/">
					<img src="/logo.svg" alt="" width={28} height={28} />
					Civelo
				</a>
				<nav className={`${CLASS_NAME}__nav`} aria-label="Navigation principale">
					{NAV_LINKS.map((link) => (
						<a key={link.href} href={link.href}>
							{link.label}
						</a>
					))}
				</nav>
				<DemoRequestButton className="btn-primary btn-primary--sm">
					Demander une démonstration
				</DemoRequestButton>
			</div>
		</header>
	);
}
