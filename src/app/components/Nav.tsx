'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';
import { useResetAnimate } from './functions/functions';

export default function Nav() {
	const { delay } = useResetAnimate();
	const linkStyle: string = 'mr-5 hover:underline';

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, delay: delay.nav }}
			className='flex items-center justify-center laptop:justify-between max-width p-5 border-b border-border-grey'
		>
			<div>
				<span className='text-lg'>NOVA ATHLETICS</span>
			</div>
			<div className='hidden laptop:flex text-gray'>
				<Link className={`${linkStyle} mr-0`} href={''} target='_blank'>
					Store
				</Link>
				<Link className={linkStyle} href={''} target='_blank'>
					Catalogue
				</Link>
				<Link className={linkStyle} href={''} target='_blank'>
					Brands
				</Link>
			</div>
		</motion.div>
	);
}
