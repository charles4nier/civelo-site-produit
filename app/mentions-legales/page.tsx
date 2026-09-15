import type { Metadata } from 'next';
import Section from '@shared/components/Section';
import './style.scss';

export const metadata: Metadata = {
	title: 'Mentions légales',
	alternates: { canonical: '/mentions-legales' }
};

const CLASS_NAME = 'legal';

export default function MentionsLegales() {
	return (
		<Section narrow>
			<div className={CLASS_NAME}>
				<h1>Mentions légales</h1>

				<h2>Éditeur du site</h2>
				<p>
					Civelo est un produit édité par Studio Web15, entreprise individuelle
					(micro-entrepreneur).
					<br />
					Studio Web15 — 2 chemin de Patay, 15000 Aurillac
					<br />
					SIRET : 752 532 234 — TVA non applicable, art. 293 B du CGI
					<br />
					Directeur de la publication : Charles Fournier
					<br />
					Contact : <a href="mailto:contact@civelo.fr">contact@civelo.fr</a>
				</p>

				<h2>Hébergement</h2>
				<p>
					Ce site est hébergé par Cloudflare, Inc.
					<br />
					101 Townsend St, San Francisco, CA 94107, États-Unis
					<br />
					<a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">
						www.cloudflare.com
					</a>
				</p>

				<h2>Propriété intellectuelle</h2>
				<p>
					L&apos;ensemble des contenus présents sur ce site (textes, visuels, code) est la
					propriété de Civelo, sauf mention contraire, et ne peut être reproduit sans
					autorisation préalable.
				</p>

				<h2>Données personnelles</h2>
				<p>
					Ce site ne dépose aucun cookie et n&apos;utilise aucun outil de mesure
					d&apos;audience. La seule donnée personnelle traitée est celle que vous
					transmettez volontairement via le formulaire de demande de démonstration (prénom,
					nom, mairie concernée, e-mail, téléphone).
				</p>
				<p>
					Ces informations sont utilisées uniquement pour répondre à votre demande. Elles
					sont transmises par e-mail via Resend (prestataire d&apos;envoi d&apos;e-mails,
					basé aux États-Unis), et conservées le temps nécessaire au traitement de votre
					demande puis à la relation commerciale, sans être cédées à un tiers.
				</p>
				<p>
					Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
					rectification et d&apos;effacement de vos données : il vous suffit d&apos;en
					faire la demande à <a href="mailto:contact@civelo.fr">contact@civelo.fr</a>.
				</p>
				<p>
					Le traitement des données des habitants et des agents sur le site propre à
					chaque commune est distinct de ce site vitrine et fait l&apos;objet d&apos;un
					contrat de sous-traitance RGPD dédié, fourni à chaque commune cliente.
				</p>

				<h2>Accessibilité</h2>
				<p>
					Ce site vitrine est un support commercial, pas un site de commune : il
					n&apos;entre pas dans le champ d&apos;application obligatoire du RGAA. Nous
					appliquons néanmoins ses bonnes pratiques dans sa construction (contrastes,
					navigation au clavier, structure des pages). Les sites que nous livrons aux
					communes font l&apos;objet d&apos;une démarche RGAA à part entière, détaillée
					dans notre offre.
				</p>
			</div>
		</Section>
	);
}
