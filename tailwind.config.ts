import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				gray: 'var(--grey)',
				'border-grey': 'var(--border-grey)',
				'off-white': 'var(--off-white)',
			},
		},
		backgroundImage: {
			hero: "url('/images/Hero.jpg')",
		},
		screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px',
		},
	},
	plugins: [],
} satisfies Config;
