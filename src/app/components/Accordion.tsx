'use client';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
type Props = {
	heading: string;
	text: string;
};

export default function AccordionComponent({ heading, text }: Props) {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	return (
		<motion.div className='flex items-center justify-center'>
			<Accordion className='max-w-[1075px] !bg-off-white'>
				<AccordionSummary
					onClick={() => setIsExpanded(!isExpanded)}
					expandIcon={isExpanded ? <AddIcon /> : <RemoveIcon />}
				>
					{heading}
				</AccordionSummary>
				<AccordionDetails>{text}</AccordionDetails>
			</Accordion>
		</motion.div>
	);
}
