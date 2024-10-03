import clsx from 'clsx';

import { CopyIcon, CheckIcon, XIcon } from '@/icons';
import { useClipboard } from '@/hooks';

import { bundle } from 'lightningcss';

const { code, map } = bundle({
	filename: 'style.module.css',
	minify: true
});

import styles from './style.module.css';

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	valueToCopy: string;
	timeout?: number;
	size?: 'small' | 'medium' | 'large' | number;
}

export const CopyButton = ({ valueToCopy, size = 'medium', timeout = 1500, ...props }: CopyButtonProps) => {
	const { copy, status } = useClipboard(timeout);

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
		medium: 32,
		large: 36
	};

	const inlineStyles = {
		['--copy-button-size' as string]: `${typeof size === 'number' ? size : sizeMap[size]}px`,
		['--copy-button-timeout' as string]: `${timeout}ms`
	} as React.CSSProperties;

	return (
		<button {...props} style={inlineStyles} className={styles.button} onClick={handleClick} data-status={status}>
			<CopyIcon className={styles.icon} />

			{status === 'COPIED' && <CheckIcon className={clsx(styles.icon, styles.status, styles.copied)} />}
			{status === 'ERROR' && <XIcon className={clsx(styles.icon, styles.status, styles.error)} />}
		</button>
	);
};
