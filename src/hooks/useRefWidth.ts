import { useEffect, useState, useRef } from 'react';

export const useRefWidth = () => {
	const [refWidth, setWidth] = useState(0);

	const ref = useRef<HTMLElement>(null);

	const updateWidth = () => {
		const element = ref.current;

		if (!element) {
			return;
		}

		const { width } = element.getBoundingClientRect();
		setWidth(width);
	};

	useEffect(() => {
		updateWidth();
	}, []);

	return [ref, refWidth];
};
