export interface Delay {
	nav: number;
	hero: number;
	heroImage: number;
	heroImageText: number;
}

export interface MotionStyles {
	initial: { opacity: number };
	whileInView: { opacity: number };
	transition: { duration: number };
}

export type NavItems = {
	label: string;
	link: string;
}[];

export type AccordionItems = {
	heading: string;
	text: string;
}[];

export interface Message {
	name: string;
	email: string;
	enquiry: string;
	message: string;
}
