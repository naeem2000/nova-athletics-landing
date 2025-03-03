'use client';

import { Favorite, FavoriteBorder } from '@mui/icons-material';
import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
	img: string;
	hero: boolean;
	itemText?: string;
};

export default function ListingCard({ img, hero, itemText }: Props) {
	const [isLiked, setIsLiked] = useState<boolean>(false);

	return (
		<div className='bg-white max-w-[360px] w-full rounded-2xl cursor-pointer m-2'>
			<div className='px-5 py-6'>
				<p>@nova_athletics</p>
			</div>
			<div>
				<Image
					src={img}
					width={300}
					height={300}
					alt='sweater'
					className='w-full h-auto'
				/>
			</div>
			<div className='px-5 py-4'>
				{hero ? (
					<>
						<div
							onClick={() => setIsLiked(!isLiked)}
							className='cursor-pointer w-min mb-2'
						>
							{isLiked ? (
								<Favorite className='text-dark-blue' />
							) : (
								<FavoriteBorder />
							)}
						</div>
						<p>Quality that makes you want more</p>
					</>
				) : (
					<>
						<p>{itemText}</p>
					</>
				)}
			</div>
		</div>
	);
}
