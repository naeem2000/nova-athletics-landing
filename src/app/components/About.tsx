'use client';
import { motionStyles } from './functions/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

export default function About() {
	return (
		<div className='bg-off-white px-5 py-24'>
			<motion.div {...motionStyles} className='max-width'>
				<div className='flex items-center justify-center'>
					<div>
						<Image
							src={'/crunch-woman.jpg'}
							width={500}
							height={450}
							alt='crunch woman'
						/>
					</div>
					<div>Philisophy</div>
				</div>
			</motion.div>
		</div>
	);
}
