import { CopyButton, type CopyButtonProps } from '../button';

import styles from './style.module.css';

export type ButtonProps = Omit<CopyButtonProps, 'valueToCopy'> & {
	valueToCopy?: string;
};

export interface CopyBlockProps extends Omit<React.HTMLProps<HTMLParagraphElement>, 'children'> {
	children: string;
	valueToCopy?: string;
	buttonProps?: ButtonProps;
}

export const CopyBlock = ({ children, valueToCopy, buttonProps, ...props }: CopyBlockProps) => {
	const size = buttonProps?.size || 'medium';

	const sizeMap = {
		small: 28,
		medium: 32,
		large: 36
	};

	const inlineStyles = {
		['--copy-button-size' as string]: `${typeof size === 'number' ? size : sizeMap[size]}px`
	} as React.CSSProperties;

	return (
		<p {...props} style={inlineStyles} className={styles.block}>
			{children}
			<CopyButton {...buttonProps} valueToCopy={String(valueToCopy || children)} />
		</p>
	);
};
