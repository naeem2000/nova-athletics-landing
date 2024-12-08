import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Head from 'next/head';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Nova Athletics',
	description:
		"A one 'online' stop to get your finest fix of comfortable, high quality gym wear - Nova Athletics",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Head>
				<title>Nova Athletics</title>
				<meta
					name='description'
					content="A one 'online' stop to get your finest fix of comfortable, high quality gym wear - Nova Athletics"
				/>
				<meta property='og:title' content='Nova Athletics' />
				<meta
					property='og:description'
					content="A one 'online' stop to get your finest fix of comfortable, high quality gym wear - Nova Athletics"
				/>
				<meta property='og:image' content='./favicon.ico' />
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<body className={`${inter.className} antialiased`}>
				<main>
					<Nav />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
