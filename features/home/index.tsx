import Hero from './Hero';
import SiteMairie from './SiteMairie';
import Models from './Models';
import Offer from './Offer';
import Reversibilite from './Reversibilite';
import Subscription from './Subscription';
import PenseMairie from './PenseMairie';
import Accessibilite from './Accessibilite';
import Secretariat from './Secretariat';
import Process from './Process';
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
			<PenseMairie />
			<Accessibilite />
			<Secretariat />
			<Process />
			<FAQ />
			<FinalCTA />
		</>
	);
}
