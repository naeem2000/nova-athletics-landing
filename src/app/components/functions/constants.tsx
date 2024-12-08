import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import { MotionStyles } from '@/modules';

export const motionStyles: MotionStyles = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	transition: { duration: 2 },
};

export const SkeletonLoader = () => {
	return (
		<Skeleton
			className='h-full z-10'
			customHighlightBackground='linear-gradient(90deg, var(--off-white) 40%, var(--foreground) 50%)'
			baseColor='#f7f7f7'
		/>
	);
};
