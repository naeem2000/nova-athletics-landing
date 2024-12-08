'use client';

import SupportBrands from './components/SupportBrands';
import About from './components/About';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Logos from './components/Logos';

export default function Home() {
	return (
		<>
			<Hero />
			<Logos />
			<About />
			<Faq />
			<SupportBrands />
		</>
	);
}
