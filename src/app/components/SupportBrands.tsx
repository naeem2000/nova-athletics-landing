import React from 'react';
import Button from './Button';

export default function SupportBrands() {
	return (
		<div className='flex items-center justify-center px-12 py-16 laptop:py-24 flex-col bg-off-white mt-24'>
			<h2 className='text-center text-3xl laptop:text-6xl font-bold leading-tight'>
				Support Local Brands Today
			</h2>
			<Button className='mt-7 text-base laptop:text-2xl' text='See Brands' />
		</div>
	);
}
