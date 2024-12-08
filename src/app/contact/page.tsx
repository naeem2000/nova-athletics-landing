import ContactPage from './ContactPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Nova Athletics | Contact',
};

export default function page() {
	return <ContactPage />;
}
