'use client';

import { SkeletonLoader } from './functions/constants';
import 'react-loading-skeleton/dist/skeleton.css';
import VideoComponent from './VideoComponent';
import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import Button from './Button';

export default function Hero() {
	return (
		<motion.div className='border-t border-border-grey mt-1 laptop:p-0'>
			<div className='relative max-width'>
				<div className='relative w-full h-[100vh] laptop:h-[80vh] overflow-hidden'>
					<Suspense fallback={<SkeletonLoader />}>
						<VideoComponent />
					</Suspense>
					<div className='absolute inset-0 bg-black h-[100vh] opacity-50 -z-5' />
					<div className='max-width flex items-center justify-center flex-col h-full  mb-16 laptop:mb-32 z-20 relative'>
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
