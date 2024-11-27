'use client';

import Logos from './components/Logos';
import About from './components/About';
import Hero from './components/Hero';
import Faq from './components/Faq';
import SupportBrands from './components/SupportBrands';

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
