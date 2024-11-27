import React from 'react';
import { BeatLoader } from 'react-spinners';

type Props = {
	className?: string;
	isLoading?: boolean;
	text: string;
	type?: 'button' | 'reset' | 'submit';
};

export default function Button({ className, isLoading, text, type }: Props) {
	return (
		<button
			type={type}
			className={`flex items-center justify-center ${className}`}
		>
			{isLoading ? <BeatLoader size={10} color='white' /> : text}
		</button>
	);
}
