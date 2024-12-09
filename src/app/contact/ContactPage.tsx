'use client';

import { motionStyles } from '../components/functions/constants';
import { Enquiry, Message } from '@/modules';
import { Mail } from '@mui/icons-material';
import { useForm } from '@formspree/react';
import Button from '../components/Button';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
	FormControl,
	InputLabel,
	TextField,
	MenuItem,
	Select,
} from '@mui/material';

export default function Contact() {
	const [state, handleSubmit] = useForm('mdkowagk');
	const [senderDetails, setSenderDetails] = useState<Message>({
		name: '',
		email: '',
		enquiry: '',
		message: '',
	});

	return (
		<motion.div {...motionStyles}>
			{!state.succeeded ? (
				<div className='max-width flex items-center justify-center flex-col px-8 py-20 laptop:h-screen'>
					<h2 className='text-5xl font-bold mb-14'>Contact</h2>
					<div className='flex items-center justify-center w-full max-w-[1100px] flex-col laptop:flex-row'>
						<form onSubmit={handleSubmit} className='w-full laptop:w-1/2'>
							<TextField
								required
								value={senderDetails.name ?? ''}
								className='w-full'
								label='Full Name'
								name='names'
								variant='standard'
								onChange={(e) =>
									setSenderDetails({ ...senderDetails, name: e.target.value })
								}
							/>
							<TextField
								required
								value={senderDetails.email ?? ''}
								className='w-full !mt-5'
								label='Email'
								variant='standard'
								type='email'
								name='email'
								onChange={(e) =>
									setSenderDetails({
										...senderDetails,
										email: e.target.value,
									})
								}
							/>
							<FormControl required fullWidth className='!mt-5'>
								<InputLabel className='!-left-3.5'>Enquiry</InputLabel>
								<Select
									variant='standard'
									value={senderDetails.enquiry ?? ''}
									label='Enquiry'
									onChange={(e) =>
										setSenderDetails({
											...senderDetails,
											enquiry: e.target.value as Enquiry,
										})
									}
								>
									<MenuItem value={Enquiry.account}>Account</MenuItem>
									<MenuItem value={Enquiry.billing}>Billing</MenuItem>
									<MenuItem value={Enquiry.deliveries}>Deliveries</MenuItem>
								</Select>
							</FormControl>
							<TextField
								required
								multiline={true}
								rows={5}
								value={senderDetails.message ?? ''}
								className='w-full !mt-5'
								label='Message'
								name='message'
								variant='standard'
								onChange={(e) =>
									setSenderDetails({
										...senderDetails,
										message: e.target.value,
									})
								}
							/>
							<div className='flex items-center justify-center'>
								<Button
									type='submit'
									className='difference mt-10 px-10'
									isLoading={state.submitting}
									text='Submit'
								/>
							</div>
						</form>
						<div className='ml-0 laptop:ml-10 laptop:mt-0 mt-5 w-full laptop:w-1/2 flex items-center justify-center'>
							<Image
								src={'/contact-woman.png'}
								height={1000}
								width={1000}
								alt='Gym'
								className='rounded-full max-w-xs laptop:max-w-full object-contain'
							/>
						</div>
					</div>
				</div>
			) : (
				<div className='h-[90vh] flex items-center justify-center flex-col'>
					<h1 className='text-5xl mb-5'>Thank you for contacting!</h1>
					<p className='text-3xl mb-5'>We will get back to you ASAP</p>
					<Mail fontSize='large' />
				</div>
			)}
		</motion.div>
	);
}
