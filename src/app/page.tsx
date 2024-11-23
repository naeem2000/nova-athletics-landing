'use client';
import Logos from './components/Logos';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Faq from './components/Faq';

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero />
			<Logos />
			<About />
			<Faq />
		</main>
	);
}
