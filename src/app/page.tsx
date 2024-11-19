'use client';
import Logos from './components/Logos';
import Hero from './components/Hero';
import Nav from './components/Nav';

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero />
			<Logos />
		</main>
	);
}
