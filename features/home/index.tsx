import Hero from './Hero';
import Proof from './Proof';
import Context from './Context';
import Offer from './Offer';
import Subscription from './Subscription';
import Models from './Models';
import Hosting from './Hosting';
import PriceCompare from './PriceCompare';
import Process from './Process';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';

export default function Home() {
	return (
		<>
			<Hero />
			<Proof />
			<Context />
			<Offer />
			<Subscription />
			<Models />
			<Hosting />
			<PriceCompare />
			<Process />
			<FAQ />
			<FinalCTA />
		</>
	);
}
