import { useState, useEffect } from 'react';

export const useClipboard = (timeout = 1500) => {
	const [status, setStatus] = useState('READY');

	const copy = async (value: string) => {
		try {
			await navigator.clipboard.writeText(value);
			setStatus('COPIED');
		} catch (error) {
			console.error(error);
			setStatus('ERROR');
		}
	};

	useEffect(() => {
		if (status !== 'READY') {
			const countdown = setTimeout(() => {
				setStatus('READY');
			}, timeout);

			return () => {
				clearTimeout(countdown);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	return { copy, status };
};
