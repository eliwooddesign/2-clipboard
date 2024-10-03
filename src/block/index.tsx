import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

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
	const [scrolled, setScrolled] = useState(false);

	const scrollRef = useRef<HTMLParagraphElement>(null);

	const handleScroll = () => {
		const { scrollTop } = scrollRef.current ?? { scrollTop: 0 };
		setScrolled(scrollTop > 0);
	};

	useEffect(() => {
		const scrollElement = scrollRef.current;

		scrollElement?.addEventListener('scroll', handleScroll);

		return () => {
			scrollElement?.removeEventListener('scroll', handleScroll);
		};
	});

	const size = buttonProps?.size ?? 'medium';
	const sizeMap = { small: 28, medium: 32, large: 36 };
	const sizeValue = typeof size === 'number' ? size : sizeMap[size];

	const timeout = buttonProps?.timeout ?? 2000;

	const inlineStyles = {
		['--copy-button-size' as string]: `${sizeValue}px`,
		['--copy-button-timeout' as string]: `${timeout}ms`
	} as React.CSSProperties;

	return (
		<div className={clsx(styles.container, props.className)} style={inlineStyles} {...props}>
			<p ref={scrollRef} className={styles.block}>
				<span className={clsx(styles.wrapper, scrolled && styles.scrolled)}>
					<CopyButton className={styles.button} valueToCopy={valueToCopy ?? children} {...buttonProps} />
				</span>

				<span className={styles.placeholder} />

				{children}
			</p>
		</div>
	);
};
