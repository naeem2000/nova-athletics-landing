'use client';
import { motion } from 'motion/react';
import React from 'react';

export default function Hero() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: '2' }}
		>
			<h1 className='mt-24 text-7xl tracking-[-3.8px] font-bold'>
				FLEX IN MOTION
			</h1>
		</motion.div>
	);
}
