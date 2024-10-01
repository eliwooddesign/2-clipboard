import { useEffect, useCallback } from 'react';

import { atom, useAtom } from 'jotai';

const statusAtom = atom<'READY' | 'COPIED' | 'FAILED'>('READY');

/**
 * A hook to copy text to the clipboard.
 *
 * @param timeout
 * The duration in ms before resetting the status to `READY`, defaults to 2000.
 *
 * @returns
 * An object with the following properties:
 *  - `copy`: function to copy text to the clipboard
 *  - `status`: `READY` | `COPIED` | `FAILED`
 */
export const useClipboard = (timeout = 2000) => {
	const [status, setStatus] = useAtom(statusAtom);

	const copy = useCallback(
		async (newValue: string) => {
			try {
				if ('clipboard' in navigator) {
					await navigator.clipboard.writeText(newValue);
					setStatus('COPIED');
				} else {
					throw new Error('navigator.clipboard is not supported');
				}
			} catch (error) {
				console.error(error);
				setStatus('FAILED');
			}
		},
		[setStatus]
	);

	useEffect(() => {
		if (status !== 'READY') {
			const countdown = setTimeout(() => {
				setStatus('READY');
			}, timeout);

			return () => clearTimeout(countdown);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	return { copy, status };
};
