import Image from 'next/image';
import Reveal from '@shared/components/Reveal';
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
					<p className={`${CLASS_NAME}__badge`}>Le premium, à la portée des petites communes</p>
					<h1 className={`${CLASS_NAME}__title`}>
						Création de site internet pour les petites communes, conforme et tenu à jour.
					</h1>
					<p className={`${CLASS_NAME}__lead`}>
						Un site moderne, simple à administrer et conçu pour les besoins des communes de
						moins de 5 000 habitants.
					</p>
					<p className={`${CLASS_NAME}__lead ${CLASS_NAME}__lead--soft`}>
						Civelo s&apos;occupe de la création, de la reprise de vos contenus et de la mise
						en ligne. Votre secrétariat est formé pour gérer simplement les informations du
						quotidien.
					</p>
				</Reveal>

				<Reveal delay={150} className="actions-row">
					<a className="btn-primary btn-primary--on-dark" href="#modeles">
						Découvrir les modèles
					</a>
					<a className="btn-outline btn-outline--on-dark" href="#contact">
						Demander une présentation →
					</a>
				</Reveal>
			</div>
		</section>
	);
}
