// external
import { motion } from 'framer-motion';

// internal
import { useMotion, useClipboard } from '@/hooks';

export const SquaresIcon = () => {
	const { success, failure } = useMotion();
	const { status } = useClipboard();

	return (
		<motion.svg width='24' height='24' viewBox='0 0 24 24' animate={status.toLowerCase()}>
			{/* icon */}
			<motion.rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
			<motion.path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />

			{/* check */}
			<motion.path d='m12 15 2 2 4-4' variants={success} />

			{/* x */}
			<motion.line x1='12' x2='18' y1='12' y2='18' variants={failure} />
			<motion.line x1='12' x2='18' y1='18' y2='12' variants={failure} />
		</motion.svg>
	);
};
