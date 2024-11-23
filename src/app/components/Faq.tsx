'use client';

import { motionStyles } from './functions/constants';
import AccordionComponent from './Accordion';
import { motion } from 'motion/react';
import React from 'react';
import { accordionItems } from '@/data';

export default function Faq() {
	return (
		<motion.div {...motionStyles} className='max-width px-8 py-14'>
			<div className='flex items-center justify-center flex-col w-full'>
				<h2 className='text-5xl font-bold mb-14'>FAQ</h2>
			</div>
			<div className='flex items-center justify-center flex-col '>
				<div className='bg-off-white px-5 py-5 w-full max-w-max rounded-2xl'>
					{accordionItems.map((items, index) => {
						return (
							<div key={index}>
								<AccordionComponent
									index={index}
									heading={items.heading}
									text={items.text}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
}
