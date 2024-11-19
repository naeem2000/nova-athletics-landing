import { Delay } from '@/app/modules';
import { useEffect, useState } from 'react';

//reset delay on page load
export const useResetAnimate = () => {
	const [delay, setDelay] = useState<Delay>({
		nav: 0.5,
		hero: 1,
		heroImage: 1.5,
		heroImageText: 2,
	});

	useEffect(() => {
		setTimeout(() => {
			setDelay({
				nav: 0,
				hero: 0,
				heroImage: 0,
				heroImageText: 0,
			});
		}, 1000);
	}, []);

	return { delay };
};
