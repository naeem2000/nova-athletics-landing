'use client';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

type Props = {
	heading: string;
	text: string;
	index: number;
};

export default function AccordionComponent({ heading, text, index }: Props) {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	return (
		<Accordion key={index} className='max-w-[1075px] w-full !bg-off-white'>
			<AccordionSummary
				onClick={() => setIsExpanded(!isExpanded)}
				expandIcon={isExpanded ? <RemoveIcon /> : <AddIcon />}
			>
				<p className='font-bold text-xl'>{heading}</p>
			</AccordionSummary>
			<AccordionDetails>
				<p className='ml-12'>{text}</p>
			</AccordionDetails>
		</Accordion>
	);
}
