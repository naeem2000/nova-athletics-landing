import { socials } from '@/data';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='max-width bg-footer-black text-white'>
			<div className='flex items-center justify-between w-full p-8 laptop:p-12'>
				<p className='font-bold'>© Framer Inc. 2024</p>
				<div>
					{socials.map((item, index) => {
						return (
							<Link
								className={`${index === socials.length - 1 ? '!mr-0' : 'mr-4'}`}
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
		</footer>
	);
}
