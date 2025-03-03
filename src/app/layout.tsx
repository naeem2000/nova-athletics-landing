import { Poppins } from 'next/font/google';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import Nav from './components/Nav';
import Head from 'next/head';
import './globals.css';

const inter = Poppins({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Nova Athletics | Home',
	description:
		"A one 'online' stop to get your finest fix of comfortable, high quality gym wear - Nova Athletics",
	robots: 'index',
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
