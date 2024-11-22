'use client';
import { motionStyles } from './functions/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

export default function About() {
	return (
		<div id='about' className='bg-off-white px-5 py-16 laptop:py-24'>
			<motion.div {...motionStyles} className='max-width'>
				<div className='flex flex-col laptop:flex-row items-start justify-center'>
					<div className='mb-10 laptop:mb-0'>
						<Image
							src={'/crunch-woman.jpg'}
							width={370}
							height={400}
							alt='crunch woman'
							className='rounded-3xl w-[476px]'
						/>
					</div>
					<div className='laptop:ml-12'>
						<h2 className='text-5xl font-bold'>Philosophy</h2>
						<p className='max-w-full laptop:max-w-[476px] text-gray mt-5 text-2xl'>
							We identify a niche in the market for premium fitness attire and
							outdoor equipment at economic rates. Our vision is to span this
							void by establishing a retail framework that puts these items
							within reach of a wider audience.
						</p>
						<button className='mt-5'>Read more</button>
					</div>
				</div>
			</motion.div>
			<motion.div {...motionStyles} className='max-width'>
				<div className='flex flex-col laptop:flex-row items-start justify-center mt-20'>
					<div className='laptop:mr-12 order-2 laptop:order-1'>
						<h2 className='text-5xl font-bold'>Philosophy</h2>
						<p className='max-w-full laptop:max-w-[476px] text-gray mt-5 text-2xl'>
							We identify a niche in the market for premium fitness attire and
							outdoor equipment at economic rates. Our vision is to span this
							void by establishing a retail framework that puts these items
							within reach of a wider audience.
						</p>
						<button className='mt-5'>Read more</button>
					</div>
					<div className='order-1 laptop:order-2 mb-10 laptop:mb-0'>
						<Image
							src={'/dead-lift-man.jpg'}
							width={370}
							height={400}
							alt='crunch woman'
							className='rounded-3xl w-[476px]'
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
