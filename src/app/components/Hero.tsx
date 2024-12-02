'use client';
import { useResetAnimate } from './functions/functions';
import { motion } from 'motion/react';
import React from 'react';
import Button from './Button';

export default function Hero() {
	const { delay } = useResetAnimate();

	return (
		<motion.div className='border-t border-border-grey mt-1 laptop:p-0'>
			<div className='relative max-width'>
				{/* Hero Section with background video */}
				<div className='relative w-full overflow-hidden'>
					<video
						className='absolute inset-0 w-full h-[90vh] laptop:h-max object-cover -z-10'
						autoPlay
						loop
						muted
						playsInline
					>
						<source src='/hero-video.mp4' type='video/mp4' />
					</video>
					<div className='absolute inset-0 bg-black opacity-50 -z-5'></div>
					<div className='max-width py-20 laptop:py-52 mb-16 laptop:mb-32 z-10 relative'>
						<h1 className='text-4xl laptop:text-7xl laptop:tracking-[-3.8px] font-bold text-center text-white'>
							NOVA ATHLETICS
						</h1>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1, delay: delay.heroImageText }}
							className='flex items-center justify-center mt-5 flex-col'
						>
							<p className='text-gray text-2xl mb-5 text-center'>
								The Best Gymwear in Cape Town
							</p>
							<a href='#about'>
								<Button text='See more' />
							</a>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
