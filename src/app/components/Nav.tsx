'use client';

import { useResetAnimate, useShowNav } from './functions/functions';
import { Divide as Hamburger } from 'hamburger-react';
import { motion } from 'motion/react';
import { navItems } from '@/data';
import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

export default function Nav() {
	const { delay } = useResetAnimate();
	const { isNavOpen, setIsNavOpen } = useShowNav();
	const linkStyle: string = 'mr-5 hover:underline';

	return (
		<div>
			<div className='flex justify-between max-width p-7 laptop:p-5 border-b border-border-grey'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: delay.nav }}
					className='flex justify-between items-center w-full'
				>
					<span className='text-lg'>NOVA ATHLETICS</span>
					<div className='hidden laptop:flex text-gray ml-auto'>
						{' '}
						{/* Use ml-auto for right-alignment */}
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
				</motion.div>

				<div className={`z-10 block laptop:hidden fixed top-5 right-5`}>
					<Hamburger onToggle={setIsNavOpen} toggled={isNavOpen} />
				</div>
			</div>
			<div
				className={`fixed block laptop:hidden w-3/5 h-full top-0 bottom-0 transform transition-transform ease-in-out duration-500 -translate-x-full bg-black z-50 text-white ${
					isNavOpen && '!translate-x-0'
				}`}
			>
				<div className='border-b border-white px-5 pt-5 pb-3'>
					<span className='text-lg'>NOVA ATHLETICS</span>
				</div>
				<div className='p-5 flex flex-col h-[90%] justify-between'>
					{/* Navigation links */}
					<div className='flex flex-col'>
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

					{/* Social Links Section (pushed to the bottom) */}
					<div className='mt-auto -mb-5'>
						<div className='flex space-x-4'>
							<Link href={''} target='_blank'>
								<Instagram />
							</Link>
							<Link href={''} target='_blank'>
								<Facebook />
							</Link>
							<Link href={''} target='_blank'>
								<WhatsApp />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
