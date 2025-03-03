import { Metadata } from 'next';
import Home from './Home';

export const metadata: Metadata = {
	title: 'Nova Athletics | Home',
};

export default function Page() {
	return <Home />;
}
