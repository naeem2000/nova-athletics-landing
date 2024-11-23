'use client';

import { useResetAnimate, useShowNav } from './functions/functions';
import { Divide as Hamburger } from 'hamburger-react';
import { motion } from 'motion/react';
import { navItems } from '@/data';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	const { delay } = useResetAnimate();
	const { isNavOpen, setIsNavOpen } = useShowNav();
	const linkStyle: string = 'mr-5 hover:underline';

	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: delay.nav }}
				className='flex items-center justify-between max-width p-5 border-b border-border-grey'
			>
				<span className='text-lg'>NOVA ATHLETICS</span>
				<div className='hidden laptop:flex text-gray'>
					{navItems.map((item, index) => {
						return (
							<Link
								key={index}
								className={`${linkStyle} ${
									index === navItems.length - 1 && '!mr-0'
								}`}
								href={item.link}
								target='_blank'
							>
								{item.label}
							</Link>
						);
					})}
				</div>
				<div className='z-10 block laptop:hidden'>
					<Hamburger onToggle={setIsNavOpen} toggled={isNavOpen} />
				</div>
			</motion.div>
			<div
				className={`fixed block laptop:hidden w-4/6 h-screen top-0 transform transition-transform ease-linear duration-300 -translate-x-[900px] bg-black z-50 text-white ${
					isNavOpen && '!translate-x-0'
				}`}
			>
				<div className='border-b border-white px-5 pt-5 pb-3'>
					<span className='text-lg'>NOVA ATHLETICS</span>
				</div>
				<div className='p-5 flex justify-between flex-col h-full'>
					<div className='flex flex-col h-full'>
						{navItems.map((item, index) => {
							return (
								<Link
									key={index}
									className={`${linkStyle} mb-5`}
									href={item.link}
									target='_blank'
								>
									{item.label}
								</Link>
							);
						})}
					</div>
					<p>awe</p>
				</div>
			</div>
		</div>
	);
}
