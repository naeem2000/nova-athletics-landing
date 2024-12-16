'use client';

import { ResetHeroAnimate, useShowNav } from './functions/functions';
import { SkeletonLoader } from './functions/constants';
import 'react-loading-skeleton/dist/skeleton.css';
import VideoComponent from './VideoComponent';
import { navItems, socials } from '@/data';
import Hamburger from 'hamburger-react';
import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import Button from './Button';
import Link from 'next/link';

export default function Hero() {
	const { isNavOpen, setIsNavOpen } = useShowNav();
	const { animate } = ResetHeroAnimate();
	const linkStyle: string = 'mr-5 hover:underline';

	const HeroNav = () => {
		return (
			<div className='absolute top-0 left-0 right-0 z-30'>
				<div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: animate }}
						className='flex justify-between max-width p-7 laptop:p-5'
					>
						<div className='flex justify-between items-center w-full'>
							<span className='text-3xl font-bold leading-[45px] text-left text-white'>
								NOVA ATHLETICS
							</span>
							<div className='hidden laptop:flex text-gray ml-auto text-white text-lg'>
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
						isNavOpen &&
						'!translate-x-0 transition-transform ease-in-out duration-500'
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
	};

	return (
		<div className='laptop:p-0'>
			<HeroNav />
			<div className='relative max-width'>
				<div className='relative w-full h-[100vh] laptop:h-[90vh] overflow-hidden'>
					<Suspense fallback={<SkeletonLoader />}>
						<VideoComponent />
					</Suspense>
					<div className='absolute inset-0 bg-black h-[100vh] opacity-50 -z-10' />
					<div className='max-width flex items-start justify-center flex-col h-full z-20 relative px-7 laptop:pl-24'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1, delay: animate }}
						>
							<h1 className='text-5xl tablet:text-[100px] leading-snug laptop:leading-[117.19px] text-left text-white max-w-2xl'>
								<strong>The Best Gym Wear In</strong> Cape Town
							</h1>
							<div className='flex mt-10 flex-col tablet:flex-row'>
								<Link href='#'>
									<Button
										arrow={true}
										text='Find out more'
										className='mr-5 difference bg-white mb-4 tablet:mb-0'
									/>
								</Link>
								<Link href='#about'>
									<Button text='See more' />
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
