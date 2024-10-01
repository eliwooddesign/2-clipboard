// external
import { motion, useAnimate, useMotionValue, useMotionValueEvent } from 'framer-motion';

// internal
import { useClipboard, useFlubber, useMotion } from '@/hooks';
import { useEffect, useState } from 'react';

const smallPaperPath = 'M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z';
const bigPaperPath = 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z';

const smallFoldPath = 'M20 7h-3a2 2 0 0 1-2-2V2';
const bigFoldPath = 'M14 2v4a2 2 0 0 0 2 2h4';

export const FilesIcon = () => {
	const [motionValue, setMotionValue] = useState(0);

	const { status } = useClipboard();

	const [scope, animate] = useAnimate();
	const { normal, success, failure, speed } = useMotion();

	const progress = useMotionValue(0);

	useMotionValueEvent(progress, 'change', (value: number) => setMotionValue(value));

	const paperPath = useFlubber(progress, smallPaperPath, bigPaperPath);
	const foldPath = useFlubber(progress, smallFoldPath, bigFoldPath);

	console.log('motionValue', motionValue);

	useEffect(() => {
		if (status === 'READY') {
			const animation = animate(progress, 0, {
				ease: 'easeOut',
				duration: speed.in,
				delay: speed.out,
				onComplete: () => {
					progress.set(0);
				}
			});

			return () => animation.stop();
		}

		const animation = animate(progress, 1, {
			ease: 'easeIn',
			duration: speed.in
		});

		return () => animation.stop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	return (
		<motion.svg ref={scope} width='24' height='24' viewBox='0 0 24 24' animate={status.toLowerCase()}>
			{/* icon */}
			<motion.path d='M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8' variants={normal} />
			<motion.path d={foldPath} />
			<motion.path d={paperPath} />

			{/* check */}
			<motion.path d='m9 15 2 2 4-4' variants={success} />

			{/* x */}
			<motion.line x1='12' x2='18' y1='12' y2='18' variants={failure} />
			<motion.line x1='12' x2='18' y1='18' y2='12' variants={failure} />
		</motion.svg>
	);
};
