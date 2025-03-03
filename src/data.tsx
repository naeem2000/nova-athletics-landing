import { AccordionItems, NavItems, SocialItems } from './modules';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

export const navItems: NavItems = [
	{
		label: 'Home',
		link: '/',
		target: '',
	},
	{
		label: 'Store',
		link: 'https://www.google.com',
		target: '_blank',
	},
	{
		label: 'Catalogue',
		link: 'https://www.google.com',
		target: '_blank',
	},
	{
		label: 'Brands',
		link: 'https://www.google.com',
		target: '_blank',
	},
	{
		label: 'Contact',
		link: '/contact',
		target: '',
	},
];

export const socials: SocialItems = [
	{
		icon: <Instagram fontSize='medium' />,
		url: 'https://www.google.com',
	},
	{
		icon: <Facebook fontSize='medium' />,
		url: 'https://www.google.com',
	},
	{
		icon: <WhatsApp fontSize='medium' />,
		url: 'https://www.google.com',
	},
];

export const accordionItems: AccordionItems = [
	{
		heading: 'Do you deliver?',
		text: 'Nova Athletics does not handle deliveries directly. Instead, our partnered brands and suppliers manage the shipping process themselves. This allows for faster and more efficient delivery, as your order is sent straight from the brand to your doorstep.',
	},
	{
		heading: 'Are your suppliers reputable?',
		text: 'Absolutely! We carefully select all our partnered brands and suppliers to ensure they align with our values. We work only with those who share our commitment to quality, affordability, and customer satisfaction, providing you with the best products at great prices.',
	},
	{
		heading: 'Do you offer credit services?',
		text: 'Currently, we do not offer credit services. However, we are actively exploring options to introduce this in the future. Stay tuned for updates!',
	},
];

export const typography = {
	about1:
		'We identify a niche in the market for premium fitness attire and outdoor equipment at economic rates. Our vision is to span this void by establishing a retail framework that puts these items within reach of a wider audience.',
	about2:
		'We realise the significance of providing top-notch fitness attire and outdoor equipment without sacrificing cost-effectiveness. Our objective is to establish a marketplace where superior products are available to all, regardless of their financial capacity.',
};
