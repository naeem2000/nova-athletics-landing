'use client';

import { motionStyles } from './components/functions/constants';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import React from 'react';

export default function NotFound() {
	const router = useRouter();

	return (
		<motion.div
			{...motionStyles}
			className='max-width flex items-center justify-center h-screen flex-col px-8 text-center'
		>
			<h1 className='text-6xl'>404?</h1>
			<p className='text-2xl laptop:text-3xl my-9'>
				You must have lost your way...
			</p>
			<button onClick={() => router.back()}>Go back</button>
		</motion.div>
	);
}
