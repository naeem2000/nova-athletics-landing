import { useEffect, useState } from 'react';
import { Delay } from '@/modules';

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

//Nav menu
export const useShowNav = () => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (isNavOpen) {
				document.body.style.overflowY = 'hidden';
			} else {
				document.body.style.overflowY = 'scroll';
			}
		}
	}, [isNavOpen]);

	return { isNavOpen, setIsNavOpen };
};
