// Worker "assets + API" : sert le site statique exporté (out/) pour toutes
// les routes, et intercepte uniquement POST /api/contact pour transmettre
// le formulaire de demande de démonstration à Resend. La clé API ne doit
// jamais transiter côté client — c'est exactement pour ça que ce Worker
// existe plutôt qu'un appel direct à l'API Resend depuis le navigateur.
export interface Env {
	ASSETS: { fetch(request: Request): Promise<Response> };
	RESEND_API_KEY: string;
}

type ContactPayload = {
	prenom?: string;
	nom?: string;
	mairie?: string;
	email?: string;
	telephone?: string;
	// Honeypot : champ invisible pour un humain, souvent rempli par les bots
	// de spam automatisés. Non requis, jamais affiché ni annoncé.
	site?: string;
};

const json = (data: unknown, status = 200) =>
	new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/api/contact') {
			if (request.method !== 'POST') return json({ error: 'Méthode non autorisée' }, 405);
			return handleContact(request, env);
		}

		return env.ASSETS.fetch(request);
	}
};

async function handleContact(request: Request, env: Env): Promise<Response> {
	let data: ContactPayload;
	try {
		data = await request.json();
	} catch {
		return json({ error: 'Corps de requête invalide' }, 400);
	}

	if (data.site) {
		// Honeypot rempli : on répond succès sans rien envoyer, pour ne pas
		// indiquer aux bots que leur remplissage a été détecté.
		return json({ ok: true });
	}

	const { prenom, nom, mairie, email, telephone } = data;
	if (!prenom?.trim() || !nom?.trim() || !mairie?.trim() || !email?.trim() || !telephone?.trim()) {
		return json({ error: 'Tous les champs sont requis.' }, 400);
	}
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ error: 'Adresse e-mail invalide.' }, 400);
	}

	const resendRes = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${env.RESEND_API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from: 'Civelo <contact@civelo.fr>',
			to: 'contact@civelo.fr',
			reply_to: email,
			subject: `Demande de démonstration — ${mairie}`,
			text: [
				`Prénom : ${prenom}`,
				`Nom : ${nom}`,
				`Mairie concernée : ${mairie}`,
				`E-mail : ${email}`,
				`Téléphone : ${telephone}`
			].join('\n')
		})
	});

	if (!resendRes.ok) {
		return json({ error: "L'envoi a échoué, réessayez ou écrivez-nous directement." }, 502);
	}

	return json({ ok: true });
}
