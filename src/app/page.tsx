import { Metadata } from 'next';
import Home from './Home';

export const metaData: Metadata = {
	title: 'Nova Athletics | Home',
};

export default function Page() {
	return <Home />;
}
