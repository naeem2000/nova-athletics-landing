'use client';

import { motionStyles } from './functions/constants';
import AccordionComponent from './Accordion';
import { motion } from 'motion/react';
import React from 'react';

export default function Faq() {
	return (
		<motion.div {...motionStyles} className='max-width'>
			<div className='flex items-center justify-center flex-col mt-24 w-full'>
				<h2 className='text-5xl font-bold'>FAQ</h2>
			</div>
			<AccordionComponent
				heading='test'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.'
			/>
		</motion.div>
	);
}
