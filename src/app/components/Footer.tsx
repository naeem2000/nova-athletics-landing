import { navItems, socials } from '@/data';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className=' bg-dark-blue text-white'>
			<div className='max-width p-8'>
				<div className='flex items-center justify-between w-full'>
					<p className='font-bold leading-[45px] text-left text-xl laptop:text-3xl'>
						NOVA ATHLETICS
					</p>
					<div className='mr-32 hidden laptop:flex'>
						{navItems.map((item, index) => {
							return (
								<Link
									key={index}
									className='mr-6'
									href={item.link}
									target={item.target}
								>
									{item.label}
								</Link>
							);
						})}
					</div>
					<div>
						{socials.map((item, index) => {
							return (
								<Link
									className={`${
										index === socials.length - 1 ? '!mr-0' : 'mr-4'
									}`}
									key={index}
									target='_blank'
									href={item.url}
								>
									{item.icon}
								</Link>
							);
						})}
					</div>
				</div>
				<p className='text-center mt-5'>
					© Nova Athletics 2025 | Terms and Conditions |{' '}
					<Link
						className='underline'
						href='https://naeemdev.netlify.app/'
						target='_blank'
					>
						devanddesign
					</Link>
				</p>
			</div>
		</footer>
	);
}
