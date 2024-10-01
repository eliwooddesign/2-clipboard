const speed = {
	in: 0.75,
	out: 0.75
};

const showStatus = {
	pathLength: 1,
	opacity: 1,
	transition: {
		ease: 'easeOut',
		duration: speed.in,
		delay: speed.in
	}
};

const hideStatus = {
	pathLength: 0,
	opacity: 0,
	transition: {
		ease: 'easeIn',
		duration: speed.out
	}
};

const alterIcon = {
	pathLength: 1,
	opacity: 1,
	transition: {
		ease: 'easeIn',
		duration: speed.in
	}
};

const resetIcon = {
	pathLength: 0,
	opacity: 0,
	transition: {
		ease: 'easeOut',
		duration: speed.in,
		delay: speed.out
	}
};

export type MotionVariant = Record<string, typeof showStatus | typeof hideStatus>;

const normal: MotionVariant = {
	ready: alterIcon,
	copied: resetIcon,
	failed: resetIcon
};

const success: MotionVariant = {
	ready: hideStatus,
	copied: showStatus
};

const failure: MotionVariant = {
	ready: hideStatus,
	failed: showStatus
};

export const useMotion = () => ({ normal, success, failure, speed });
