import Hero from './Hero';
import Tarif from './Tarif';
import Context from './Context';
import Offer from './Offer';
import Subscription from './Subscription';
import Models from './Models';
import Hosting from './Hosting';
import Reversibilite from './Reversibilite';
import Process from './Process';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';

export default function Home() {
	return (
		<>
			<Hero />
			<Tarif />
			<Context />
			<Offer />
			<Subscription />
			<Models />
			<Hosting />
			<Reversibilite />
			<Process />
			<FAQ />
			<FinalCTA />
		</>
	);
}
