import { BeatLoader } from 'react-spinners';
import React from 'react';
import EastIcon from '@mui/icons-material/East';

type Props = {
	className?: string;
	isLoading?: boolean;
	text: string;
	type?: 'button' | 'reset' | 'submit';
	arrow?: boolean;
};

export default function Button({
	className,
	isLoading,
	text,
	type,
	arrow,
}: Props) {
	return (
		<button
			type={type}
			className={`flex items-center justify-center ${className}`}
		>
			{isLoading ? (
				<BeatLoader size={10} color='white' />
			) : (
				<p>
					{text} {arrow && <EastIcon />}
				</p>
			)}
		</button>
	);
}
