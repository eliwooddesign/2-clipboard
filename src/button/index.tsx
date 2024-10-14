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
		small: 28,
		medium: 34,
		large: 40
	};

	const inlineStyles = {
		[prefix('--size')]: `${typeof size === 'number' ? size : sizeMap[size]}px`,
		[prefix('--timeout')]: `${timeout}ms`
	} as React.CSSProperties;

	return (
		<button {...props} style={inlineStyles} className={styles.button} onClick={handleClick} data-status={status}>
			<span className={styles['button-content']}>
				<span className={clsx(styles.container, styles['text-container'])}>
					<span className={clsx(styles.content, styles['text-content'])}>
						<span className={clsx(styles.text, styles['text-copied'])}>Copied!</span>
						<span className={clsx(styles.text, styles['text-ready'])}>Copy</span>
						<span className={clsx(styles.text, styles['text-error'])}>Error</span>
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
