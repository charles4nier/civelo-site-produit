import Hero from './Hero';
import SiteMairie from './SiteMairie';
import Models from './Models';
import Offer from './Offer';
import Reversibilite from './Reversibilite';
import Subscription from './Subscription';
import PourLesElus from './PourLesElus';
import Obligations from './Obligations';
import Accessibilite from './Accessibilite';
import Secretariat from './Secretariat';
import References from './References';
import QuiSommesNous from './QuiSommesNous';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';

export default function Home() {
	return (
		<>
			<Hero />
			<SiteMairie />
			<Models />
			<Offer />
			<Reversibilite />
			<Subscription />
			<PourLesElus />
			<Obligations />
			<Accessibilite />
			<Secretariat />
			<References />
			<QuiSommesNous />
			<FAQ />
			<FinalCTA />
		</>
	);
}
