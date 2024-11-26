'use client';

import Logos from './components/Logos';
import About from './components/About';
import Hero from './components/Hero';
import Faq from './components/Faq';

export default function Home() {
	return (
		<>
			<Hero />
			<Logos />
			<About />
			<Faq />
		</>
	);
}
