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
				<p className="eyebrow">Sites internet de communes</p>
				<h1 className={`${CLASS_NAME}__title`}>
					Création de site internet pour les petites communes,{' '}
					<span className="text-gradient-accent">conforme et tenu à jour</span>.
				</h1>
				<p className={`${CLASS_NAME}__lead`}>
					Conception, hébergement en France et accessibilité numérique. Nous livrons le
					site, les documents réglementaires et la formation de votre secrétariat.
				</p>
				<div className={`${CLASS_NAME}__actions`}>
					<a className="btn-primary" href="#contact">
						Demander une démonstration →
					</a>
					<a className="btn-link" href="#prestation">
						Voir ce qui est compris
					</a>
				</div>
				<p className={`${CLASS_NAME}__note`}>
					Conçu pour les communes de moins de 5 000 habitants
				</p>
			</div>
		</section>
	);
}
