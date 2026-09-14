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
					{/* À COMPLÉTER : raison sociale exacte, forme juridique, capital social le
					cas échéant, adresse du siège, SIREN/SIRET, et le nom du directeur ou de
					la directrice de la publication (généralement le gérant ou la gérante). */}
					[À compléter — raison sociale, forme juridique, adresse du siège, SIRET]
					<br />
					Directeur·rice de la publication : [à compléter]
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
					Ce site ne collecte aucune donnée personnelle : il ne contient ni formulaire, ni
					cookie, ni traceur, ni outil de mesure d&apos;audience. Nous ne recevons vos
					coordonnées que si vous nous écrivez directement, par exemple à l&apos;adresse{' '}
					<a href="mailto:contact@civelo.fr">contact@civelo.fr</a>, auquel cas elles ne
					servent qu&apos;à vous répondre et ne sont transmises à personne d&apos;autre.
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
