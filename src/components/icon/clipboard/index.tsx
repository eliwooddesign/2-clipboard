// external
import { motion } from 'framer-motion';

// internal
import { useMotion, useClipboard } from '@/hooks';

export const ClipboardIcon = () => {
	const { success, failure } = useMotion();
	const { status } = useClipboard();

	return (
		<motion.svg width='24' height='24' viewBox='0 0 24 24' animate={status.toLowerCase()}>
			{/* icon */}
			<motion.rect width='8' height='4' x='8' y='2' rx='1' ry='1' />
			<motion.path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />

			{/* check */}
			<motion.path d='m9 14 2 2 4-4' variants={success} />

			{/* x */}
			<motion.path d='m15 11-6 6' variants={failure} />
			<motion.path d='m9 11 6 6' variants={failure} />
		</motion.svg>
	);
};
