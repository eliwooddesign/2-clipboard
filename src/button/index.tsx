import { useEffect, useState } from 'react';

import { Tooltip } from '@/tooltip';

import styles from './style.module.css';

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	valueToCopy: string;
	size?: 'small' | 'medium' | 'large' | number;
	timeout?: number;
	tooltip?: boolean;
}

export const CopyButton = ({ valueToCopy, size = 'medium', timeout = 2000, tooltip = true, ...props }: CopyButtonProps) => {
	const [copied, setCopied] = useState(false);
	const [error, setError] = useState(false);

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		if (copied || error) return;

		try {
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(valueToCopy);
				setCopied(true);
			} else {
				console.error('Clipboard API not available.');
				setError(true);
			}
		} catch (error) {
			console.error(error);
			setError(true);
		}

		if (props.onClick) {
			props.onClick(event);
		}
	};

	useEffect(() => {
		if (copied || error) {
			const countdown = setTimeout(() => {
				setCopied(false);
				setError(false);
			}, timeout);
			return () => clearTimeout(countdown);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [copied, error]);

	const sizeMap = {
		small: 28,
		medium: 32,
		large: 36
	};

	const inlineStyles = {
		['--copy-button-size' as string]: `${typeof size === 'number' ? size : sizeMap[size]}px`,
		['--copy-button-timeout' as string]: `${timeout}ms`
	} as React.CSSProperties;

	const tooltipText = copied ? 'Copied!' : error ? 'Something went wrong' : 'Copy to clipboard';

	const active = copied || error;

	return (
		<Tooltip text={tooltipText} enabled={tooltip} className={`${styles.container} ${active ? styles.active : ''}`} data-active={active}>
			<button {...props} style={inlineStyles} className={`${styles.button} ${props.className}`} onClick={handleClick} data-copied={copied}>
				<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' className={styles.icon}>
					<rect width='14' height='14' x='8' y='8' rx='2' ry='2' className={styles.path} />
					<path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' className={styles.path} />

					{copied && (
						<>
							<path d='M20 6 9 17l-5-5' className={`${styles.status} ${styles.copied}`} />
						</>
					)}

					{error && (
						<>
							<path d='M18 6 6 18' className={`${styles.status} ${styles.error}`} />
							<path d='m6 6 12 12' className={`${styles.status} ${styles.error}`} />
						</>
					)}
				</svg>
			</button>
		</Tooltip>
	);
};
