export interface Delay {
	nav: number;
	hero: number;
	heroImage: number;
	heroImageText: number;
}

export interface MotionStyles {
	initial: { opacity: number };
	whileInView: { opacity: number };
	transition: { duration: number };
}
