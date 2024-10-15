import clsx from 'clsx';

import { CopyIcon, CheckIcon, XIcon } from '@/icons';
import { useClipboard, useRefWidth, useStyles } from '@/hooks';

import styles from './style.module.css';
import { useEffect, useState } from 'react';

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	valueToCopy: string;
	timeout?: number;
	size?: 'small' | 'medium' | 'large' | number;
}

export const CopyButton = ({ valueToCopy, size = 'medium', timeout = 1500, ...props }: CopyButtonProps) => {
	const { copy, status } = useClipboard(timeout);
	const { prefix } = useStyles(styles);

	const [textWidth, setTextWidth] = useState(0);

	const [readyTextRef, readyTextWidth] = useRefWidth<HTMLSpanElement>();
	const [copiedTextRef, copiedTextWidth] = useRefWidth<HTMLSpanElement>();
	const [errorTextRef, errorTextWidth] = useRefWidth<HTMLSpanElement>();

	useEffect(() => {
		if (status === 'READY') setTextWidth(readyTextWidth);
		if (status === 'COPIED') setTextWidth(copiedTextWidth);
		if (status === 'ERROR') setTextWidth(errorTextWidth);
	}, [status, readyTextWidth, copiedTextWidth, errorTextWidth]);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (status === 'READY') {
			void copy(valueToCopy);
		}

		if (props.onClick) {
			props.onClick(event);
		}
	};

	const sizeMap = {
		small: 28,
		medium: 34,
		large: 40
	};

	const inlineStyles = {
		[prefix('--size')]: `${typeof size === 'number' ? size : sizeMap[size]}px`,
		[prefix('--timeout')]: `${timeout}ms`,
		[prefix('--text-width')]: `${textWidth}px`,
		[prefix('--text-max-width')]: `${Math.max(readyTextWidth, copiedTextWidth, errorTextWidth)}px`
	} as React.CSSProperties;

	return (
		<button {...props} style={inlineStyles} className={styles.button} onClick={handleClick} data-status={status}>
			<span className={styles['button-content']}>
				<span className={clsx(styles.container, styles['text-container'])}>
					<span className={clsx(styles.content, styles['text-content'])}>
						<span ref={copiedTextRef} className={clsx(styles.text, styles['text-copied'])}>
							Copied!
						</span>
						<span ref={readyTextRef} className={clsx(styles.text, styles['text-ready'])}>
							Copy
						</span>
						<span ref={errorTextRef} className={clsx(styles.text, styles['text-error'])}>
							Error
						</span>
					</span>
				</span>

				<span className={clsx(styles.container, styles['icon-container'])}>
					<span className={clsx(styles.content, styles['icon-content'])}>
						<CopyIcon className={clsx(styles.icon, styles['icon-ready'])} />

						{status === 'COPIED' && <CheckIcon className={clsx(styles.icon, styles['icon-copied'])} />}
						{status === 'ERROR' && <XIcon className={clsx(styles.icon, styles['icon-error'])} />}
					</span>
				</span>
			</span>
		</button>
	);
};
