import { useEffect, useState } from 'react';

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
