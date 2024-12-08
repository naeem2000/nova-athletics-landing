import { ReactNode } from 'react';

export interface MotionStyles {
	initial: { opacity: number };
	whileInView: { opacity: number };
	transition: { duration: number };
}

export type NavItems = {
	label: string;
	link: string;
	target: string;
}[];

export type SocialItems = {
	icon: ReactNode;
	url: string;
}[];

export type AccordionItems = {
	heading: string;
	text: string;
}[];

export interface Message {
	name: string;
	email: string;
	enquiry: Enquiry | '';
	message: string;
}

export enum Enquiry {
	account = 'account',
	billing = 'billing',
	deliveries = 'deliveries',
}
