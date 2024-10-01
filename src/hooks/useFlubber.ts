import { interpolate } from 'flubber';
import { MotionValue, useTransform } from 'framer-motion';

export function useFlubber(progress: MotionValue<number>, pathA: string, pathB: string) {
	return useTransform(progress, [0, 1], [pathA, pathB], {
		mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 })
	});
}
