import { motionStyles } from './functions/constants';
import { motion } from 'motion/react';
import Button from './Button';
import React from 'react';

export default function SupportBrands() {
	return (
		<motion.div
			{...motionStyles}
			className='flex items-center justify-center px-12 py-16 laptop:py-24 flex-col bg-off-white mt-24'
		>
			<h2 className='text-center text-3xl laptop:text-6xl font-bold leading-tight'>
				Support Local Brands Today
			</h2>
			<Button className='difference mt-7 text-base' text='See Brands' />
		</motion.div>
	);
}
