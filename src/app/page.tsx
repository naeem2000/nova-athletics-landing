'use client';

import SupportBrands from './components/SupportBrands';
import About from './components/About';
import Hero from './components/Hero';
import Faq from './components/Faq';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Faq />
			<SupportBrands />
		</>
	);
}
