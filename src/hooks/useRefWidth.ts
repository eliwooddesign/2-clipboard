import { useEffect, useState, useRef } from 'react';

export const useRefWidth = <T extends HTMLElement>() => {
	const [refWidth, setWidth] = useState(0);

	const ref = useRef<T>(null);

	const updateWidth = () => {
		const element = ref.current;

		if (element instanceof HTMLElement) {
			const { width } = element.getBoundingClientRect();
			setWidth(width);
		}
	};

	useEffect(() => {
		updateWidth();
	}, []);

	const refAndWidth: [typeof ref, number] = [ref, refWidth];

	return refAndWidth;
};
