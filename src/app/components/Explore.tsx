import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motionStyles } from './functions/constants';
import ListingCard from './ListingCard';
import { motion } from 'motion/react';
import React from 'react';
import '@splidejs/react-splide/css';

export default function Explore() {
	return (
		<div className='bg-dark-blue py-12 px-8'>
			<motion.div {...motionStyles} className='max-width'>
				<div className='flex items-center justify-center flex-col'>
					<h3 className='text-2xl laptop:text-3xl font-normal leading-[40.5px] text-center mb-3 text-white'>
						Explore what we have in store
					</h3>
					<h2 className='text-5xl laptop:text-[64px] font-bold leading-[78.58px] text-center max-w-4xl text-white'>
						Where we find the perfect gym fit for your session.
					</h2>
				</div>
				<div className='mt-10'>
					<Splide
						options={{
							arrows: true,
							type: 'loop',
							perPage: 3,
							perMove: 1,
							autoWidth:
								typeof window !== 'undefined' && window.innerWidth < 750
									? true
									: false,
							fixedWidth:
								typeof window !== 'undefined' && window.innerWidth < 750
									? true
									: false,
						}}
					>
						<SplideSlide>
							<ListingCard
								hero={false}
								img='/products/d99de486538239.5d9cafab0ccdb.png'
								itemText='Green body-fit sweater'
							/>
						</SplideSlide>
						<SplideSlide>
							<ListingCard
								hero={false}
								img='/products/download.jpg'
								itemText='baggy black sweater'
							/>
						</SplideSlide>
						<SplideSlide>
							<ListingCard
								hero={false}
								img='/products/hero.jpg'
								itemText='baggy black sweater'
							/>
						</SplideSlide>
					</Splide>
				</div>
			</motion.div>
		</div>
	);
}
