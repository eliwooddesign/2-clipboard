import { Button, type ButtonProps } from '../button';

import styles from './style.module.css';

export interface CopyBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toCopy?: string;
	button?: ButtonProps;
}

export const CopyBlock = ({ children, toCopy, button, ...props }: CopyBlockProps) => {
	const size = button?.size || 'medium';

	const sizeMap = {
		small: 28,
		medium: 32,
		large: 36
	};

	const inlineStyles = {
		['--copy-block-size' as string]: `${typeof size === 'number' ? size : sizeMap[size]}px`
	} as React.CSSProperties;

	return (
		<p {...props} style={inlineStyles} className={styles.block}>
			{children}
			<Button toCopy={String(toCopy || children)} {...button} />
		</p>
	);
};
