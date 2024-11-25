import { motionStyles } from './functions/constants';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Message } from '@/modules';
import Image from 'next/image';
import {
	FormControl,
	InputLabel,
	TextField,
	MenuItem,
	Select,
} from '@mui/material';

export default function Contact() {
	const [senderDetails, setSenderDetails] = useState<Message>({
		name: '',
		email: '',
		enquiry: '',
		message: '',
	});

	console.log(senderDetails);
	return (
		<motion.div {...motionStyles}>
			<div className='max-width flex items-center justify-center flex-col px-8 py-14'>
				<h2 className='text-5xl font-bold mb-14'>Contact</h2>
				<div className='flex items-center justify-center w-full max-w-[1100px] flex-col laptop:flex-row'>
					<form className='w-full laptop:w-1/2'>
						<TextField
							value={senderDetails.name ?? ''}
							className='w-full'
							label='Full Name'
							variant='standard'
							onChange={(e) =>
								setSenderDetails({ ...senderDetails, name: e.target.value })
							}
						/>
						<TextField
							value={senderDetails.email ?? ''}
							className='w-full !mt-5'
							label='Email'
							variant='standard'
							type='email'
							onChange={(e) =>
								setSenderDetails({ ...senderDetails, email: e.target.value })
							}
						/>
						<FormControl fullWidth className='!mt-5'>
							<InputLabel className='!-left-3.5'>Enquiry</InputLabel>
							<Select
								variant='standard'
								value={senderDetails.enquiry ?? ''}
								label='Enquiry'
								onChange={(e) =>
									setSenderDetails({
										...senderDetails,
										enquiry: e.target.value,
									})
								}
							>
								<MenuItem value={'account'}>Account</MenuItem>
								<MenuItem value={'billing'}>Billing</MenuItem>
								<MenuItem value={'delivery'}>Delivery</MenuItem>
							</Select>
						</FormControl>
						<TextField
							multiline={true}
							rows={5}
							value={senderDetails.message ?? ''}
							className='w-full !mt-5'
							label='Message'
							variant='standard'
							onChange={(e) =>
								setSenderDetails({ ...senderDetails, message: e.target.value })
							}
						/>
						<div className='flex items-center justify-center'>
							<button type='submit' className='mt-5'>
								Submit
							</button>
						</div>
					</form>
					<div className='ml-0 laptop:mt-0 mt-5 laptop:ml-10 w-full laptop:w-1/2'>
						<Image
							src={'/contact-woman.jpg'}
							height={1000}
							width={1000}
							alt='Gym'
							className='rounded-full'
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
