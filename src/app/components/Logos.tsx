import { motionStyles } from './functions/constants';
import { motion } from 'motion/react';
import React from 'react';

export default function Logos() {
	return (
		<motion.div {...motionStyles} className='max-width'>
			<h2 className='text-center text-5xl my-20'>Coming soon</h2>
		</motion.div>
	);
}
