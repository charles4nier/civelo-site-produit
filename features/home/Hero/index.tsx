import Image from 'next/image';
import './style.scss';

const CLASS_NAME = 'hero';

export default function Hero() {
	return (
		<section className={CLASS_NAME}>
			<Image
				src="/hero-ember.jpg"
				alt=""
				aria-hidden="true"
				fill
				priority
				sizes="100vw"
				className={`${CLASS_NAME}__image`}
			/>
			<div className={`container ${CLASS_NAME}__inner`}>
				<p className={`${CLASS_NAME}__badge`}>Le premium, à la portée des petites communes</p>
				<h1 className={`${CLASS_NAME}__title`}>
					Création de site internet pour les petites communes,{' '}
					<span className="text-gradient-accent">conforme et tenu à jour</span>.
				</h1>
				<p className={`${CLASS_NAME}__lead`}>
					Un site moderne, simple à administrer et conçu pour les besoins des communes de
					moins de 5 000 habitants.
				</p>
				<p className={`${CLASS_NAME}__lead`}>
					Civelo s&apos;occupe de la création, de la reprise de vos contenus et de la mise
					en ligne. Votre secrétariat est formé pour gérer simplement les informations du
					quotidien.
				</p>
				<p className={`${CLASS_NAME}__price`}>2 900 € TTC pour la création du site</p>
				<p className={`${CLASS_NAME}__price`}>puis 59 € TTC / mois</p>
				<div className="actions-row">
					<a className="btn-link" href="#modeles">
						Découvrir les modèles
					</a>
					<a className="btn-primary" href="#contact">
						Demander une présentation →
					</a>
				</div>
			</div>
		</section>
	);
}
