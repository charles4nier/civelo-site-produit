import type { ReactNode } from 'react';

// Reprend la convention du brief éditorial : un repère visuel pour chaque
// information encore à compléter ou à valider avant publication (numéro de
// téléphone, délais, etc.), plutôt qu'une fausse valeur inventée.
export default function ToFill({ children }: { children: ReactNode }) {
	return <mark className="to-fill">{children}</mark>;
}
