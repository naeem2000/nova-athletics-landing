'use client';
import { useResetAnimate } from './functions/functions';
import { motion } from 'motion/react';
import React from 'react';
import Button from './Button';

export default function Hero() {
	const { delay } = useResetAnimate();

	const bgStyles: string =
		'bg-hero h-[516px] bg-top bg-cover bg-no-repeat rounded-[64px] max-w-[916px] w-full';

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, delay: delay.hero }}
			className='border-t border-border-grey !mt-1 max-width px-8 laptop:p-0'
		>
			<h1 className='mt-12 laptop:mt-24 text-4xl laptop:text-7xl laptop:tracking-[-3.8px] font-bold text-center mb-12'>
				NOVA ATHLETICS
			</h1>
			<div className='flex items-center justify-center w-full h-full max-h-[516px] rounded-[64px]'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: delay.heroImage }}
					className={bgStyles}
				/>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: delay.heroImageText }}
				className='flex items-center justify-center mt-12 flex-col'
			>
				<p className='text-gray text-2xl mb-5 text-center'>
					The Best Gymwear in Cape Town
				</p>
				<a href='#about'>
					<Button text='See more' />
				</a>
			</motion.div>
		</motion.div>
	);
}
