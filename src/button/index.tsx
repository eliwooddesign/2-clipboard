import clsx from 'clsx';

import { CopyIcon, CheckIcon, XIcon } from '@/icons';
import { useClipboard, useStyles } from '@/hooks';

import styles from './style.module.css';

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	valueToCopy: string;
	timeout?: number;
	size?: 'small' | 'medium' | 'large' | number;
}

export const CopyButton = ({ valueToCopy, size = 'medium', timeout = 1500, ...props }: CopyButtonProps) => {
	const { copy, status } = useClipboard(timeout);
	const { prefix } = useStyles(styles);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (status === 'READY') {
			void copy(valueToCopy);
		}

		if (props.onClick) {
			props.onClick(event);
		}
	};

	const sizeMap = {
		small: 32,
		medium: 36,
		large: 40
	};

	const inlineStyles = {
		[prefix('--size')]: `${typeof size === 'number' ? size : sizeMap[size]}px`,
		[prefix('--timeout')]: `${timeout}ms`
	} as React.CSSProperties;

	console.log(styles);

	return (
		<button {...props} style={inlineStyles} className={styles.button} onClick={handleClick} data-status={status}>
			<CopyIcon className={clsx(styles.icon, styles.ready)} />

			{status === 'COPIED' && <CheckIcon className={clsx(styles.icon, styles.status, styles.copied)} />}
			{status === 'ERROR' && <XIcon className={clsx(styles.icon, styles.status, styles.error)} />}

			<span className={styles.tooltip}>
				{status === 'READY' && <span className={styles.text}>Copy</span>}
				{status === 'COPIED' && <span className={styles.text}>Copied!</span>}
				{status === 'ERROR' && <span className={styles.text}>Error</span>}
			</span>
		</button>
	);
};
