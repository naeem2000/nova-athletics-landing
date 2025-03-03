'use client';
import SupportBrands from './components/SupportBrands';
import Explore from './components/Explore';
import About from './components/About';
import Logos from './components/Logos';
import Hero from './components/Hero';
import Faq from './components/Faq';
import React from 'react';

export default function Home() {
	return (
		<>
			<Hero />
			<Logos />
			<About />
			<Explore />
			<Faq />
			<SupportBrands />
		</>
	);
}
