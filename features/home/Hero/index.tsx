import Image from 'next/image';
import Reveal from '@shared/components/Reveal';
import DemoRequestButton from '@shared/components/DemoRequestButton';
import './style.scss';

const CLASS_NAME = 'hero';

export default function Hero() {
	return (
		<section className={CLASS_NAME}>
			<div className={`${CLASS_NAME}__background`}>
				<Image
					src="/hero-commune.jpg"
					alt="Vue aérienne d’un village français avec son clocher et son hôtel de ville"
					fill
					priority
					sizes="100vw"
					className={`${CLASS_NAME}__image`}
				/>
				<div className={`${CLASS_NAME}__gradient ${CLASS_NAME}__gradient--horizontal`} />
				<div className={`${CLASS_NAME}__gradient ${CLASS_NAME}__gradient--vertical`} />
			</div>
			<div className={`container ${CLASS_NAME}__inner`}>
				<Reveal className={`${CLASS_NAME}__intro`}>
					<p className={`${CLASS_NAME}__badge`}>Pour les communes de moins de 5 000 habitants</p>
					<h1 className={`${CLASS_NAME}__title`}>
						Le site internet de votre commune, livré clé en main et tenu à jour.
					</h1>
					<p className={`${CLASS_NAME}__lead`}>
						Nous créons votre site, reprenons vos contenus, formons votre secrétariat et
						gérons toute la technique. Vous publiez une actualité en quelques minutes. Et le
						site appartient à votre commune.
					</p>
				</Reveal>

				<Reveal delay={150} className="actions-row">
					<a className="btn-primary btn-primary--on-dark" href="#modeles">
						Trouver le modèle de ma commune
					</a>
					<DemoRequestButton className="btn-outline btn-outline--on-dark" variant="call">
						Réserver un appel de 15 minutes →
					</DemoRequestButton>
				</Reveal>

				<Reveal delay={220} className={`${CLASS_NAME}__meta`}>
					<span>3 490 € TTC à la création</span>
					<span>70 € TTC/mois</span>
					<span>Hébergé en France</span>
					<span>Un montant compatible avec un achat sans procédure formalisée</span>
				</Reveal>
			</div>
		</section>
	);
}
