'use client';
import { motionStyles } from './functions/constants';
import { motion } from 'motion/react';
import { typography } from '@/data';
import Image from 'next/image';
import Button from './Button';
import React from 'react';

export default function About() {
	return (
		<div id='about' className='bg-off-white px-8 py-16 laptop:py-24'>
			<motion.div {...motionStyles} className='max-width'>
				<div className='grid grid-cols-1 tablet:grid-cols-2 gap-5 laptop:gap-10'>
					<div className='mb-10 laptop:mb-0 justify-self-start laptop:justify-self-end'>
						<Image
							src={'/crunch-woman.jpg'}
							width={370}
							height={400}
							alt='crunch woman'
							className='rounded-3xl w-[515px]'
						/>
					</div>
					<div>
						<h2 className='text-5xl font-bold'>Philosophy</h2>
						<p className='max-w-full laptop:max-w-[476px] text-gray mt-5 text-xl laptop:text-2xl'>
							{typography.about1}
						</p>
						<Button className=' mt-5' text='Find Out More' arrow />
					</div>
				</div>
			</motion.div>
			<motion.div {...motionStyles} className='max-width'>
				<div className='grid grid-cols-1 tablet:grid-cols-2 gap-5 laptop:gap-10 mt-16'>
					<div className='order-2 tablet:order-1 justify-self-start laptop:justify-self-end'>
						<h2 className='text-5xl font-bold'>Quality & Affordability</h2>
						<p className='max-w-full laptop:max-w-[476px] text-gray mt-5 text-xl laptop:text-2xl'>
							{typography.about2}
						</p>
						<Button className=' mt-5' text='Find Out More' arrow />
					</div>
					<div className='order-1 laptop:order-2 mb-10 laptop:mb-0'>
						<Image
							src={'/dead-lift-man.jpg'}
							width={370}
							height={400}
							alt='crunch woman'
							className='rounded-3xl w-[515px]'
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
