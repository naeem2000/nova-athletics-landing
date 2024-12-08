import React from 'react';

export default function VideoComponent() {
	return (
		<video
			className='absolute inset-0 w-full h-full laptop:h-max object-cover -z-10'
			autoPlay
			loop
			muted
			playsInline
		>
			<source src='/hero-video.mp4' type='video/mp4' />
		</video>
	);
}
