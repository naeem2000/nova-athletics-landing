'use client';
import React from 'react';
import { motionStyles } from './functions/constants';
import { motion } from 'motion/react';

export default function Logos() {
	return (
		<motion.div className='my-28' {...motionStyles}>
			<h2 className='text-center text-5xl'>Coming soon</h2>
		</motion.div>
	);
}
