'use client';
import Logos from './components/Logos';
import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero />
			<Logos />
			<About />
		</main>
	);
}
