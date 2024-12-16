'use client';

import { Divide as Hamburger } from 'hamburger-react';
import { useShowNav } from './functions/functions';
import { usePathname } from 'next/navigation';
import { navItems, socials } from '@/data';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	const { isNavOpen, setIsNavOpen } = useShowNav();
	const path = usePathname();
	const linkStyle: string = 'mr-5 hover:underline';

	if (path !== '/')
		return (
			<div className='border-b border-border-grey'>
				<div className='flex justify-between max-width p-7 laptop:p-5'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
						className='flex justify-between items-center w-full'
					>
						<span className='text-lg'>NOVA ATHLETICS</span>
						<div className='hidden laptop:flex text-gray ml-auto'>
							{navItems.map((item, index) => {
								return (
									<Link
										onClick={() => setIsNavOpen(false)}
										key={index}
										className={`${linkStyle} ${
											index === navItems.length - 1 && '!mr-0'
										}`}
										href={item.link}
										target={item.target}
									>
										{item.label}
									</Link>
								);
							})}
						</div>
					</motion.div>
					<div className='z-10 block laptop:hidden fixed top-5 right-5 bg-white rounded-md mix-blend-difference'>
						<Hamburger
							onToggle={setIsNavOpen}
							toggled={isNavOpen}
							color='black'
							size={23}
						/>
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
						<div className='flex flex-col'>
							{navItems.map((item, index) => {
								return (
									<Link
										onClick={() => setIsNavOpen(false)}
										key={index}
										className={`${linkStyle} mb-5`}
										href={item.link}
										target={item.target}
									>
										{item.label}
									</Link>
								);
							})}
						</div>
						<div className='mt-auto -mb-5'>
							<div className='flex space-x-4'>
								{socials.map((item, index) => {
									return (
										<Link key={index} href={item.url} target='_blank'>
											{item.icon}
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
