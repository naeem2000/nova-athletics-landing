'use client';
import { motion } from 'motion/react';
import React from 'react';
import Button from './Button';

export default function Hero() {
	return (
		<motion.div className='border-t border-border-grey mt-1 laptop:p-0'>
			<div className='relative max-width'>
				{/* Hero Section with background video */}
				<div className='relative w-full h-[100vh] laptop:h-[80vh] overflow-hidden'>
					<video
						className='absolute inset-0 w-full h-full laptop:h-max object-cover -z-10'
						autoPlay
						loop
						muted
						playsInline
					>
						<source src='/hero-video.mp4' type='video/mp4' />
					</video>
					<div className='absolute inset-0 bg-black h-[100vh] opacity-50 -z-5' />
					<div className='max-width flex items-center justify-center flex-col h-full  mb-16 laptop:mb-32 z-10 relative'>
						<h1 className='text-4xl laptop:text-8xl laptop:tracking-[-3.8px] font-bold text-center text-white'>
							NOVA ATHLETICS
						</h1>
						<p className='text-white text-lg laptop:text-2xl mb-5 text-center'>
							The Best Gymwear in Cape Town
						</p>
						<a href='#about'>
							<Button text='See more' />
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
