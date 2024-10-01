// external
import { AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// internal
import { Icon } from '@/components';
import { useClipboard } from '@/hooks';

// styles
import styles from './style.module.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	copyValue?: string;
}

export const Button = ({ copyValue, ...props }: ButtonProps) => {
	const { copy, status } = useClipboard();

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();

		if (copyValue) {
			await copy(copyValue);
		}

		if (props.onClick) {
			props.onClick(event);
		}
	};

	return (
		<AnimatePresence>
			<button className={clsx(styles.button, props.disabled && styles.disabled, props.className)} onClick={handleClick} data-status={status}>
				<Icon name='files' />
				{status === 'COPIED' && <p className={styles.delete_me}>Copied!</p>}
			</button>
		</AnimatePresence>
	);
};
