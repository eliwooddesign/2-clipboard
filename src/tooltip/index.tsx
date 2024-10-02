import { useRef, useState } from 'react';
import { useFloating, autoUpdate, offset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions, FloatingPortal, arrow, FloatingArrow, useTransitionStyles } from '@floating-ui/react';

import styles from './style.module.css';

const ARROW_WIDTH = 12;
const ARROW_HEIGHT = 6;
const GAP = 3;

export interface TooltipProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string;
}

export const Tooltip = ({ text, ...props }: TooltipProps) => {
	const { children } = props;

	const [isOpen, setIsOpen] = useState(false);

	const arrowRef = useRef(null);

	const { refs, floatingStyles, context } = useFloating({
		placement: 'left',

		open: isOpen,
		onOpenChange: setIsOpen,

		whileElementsMounted: autoUpdate,

		middleware: [
			offset(ARROW_HEIGHT + GAP),
			flip({
				fallbackAxisSideDirection: 'start',
				fallbackPlacements: ['left', 'bottom']
			}),
			shift(),
			arrow({
				element: arrowRef
			})
		]
	});

	const hover = useHover(context, {
		delay: {
			open: 500,
			close: 500
		}
	});

	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });

	const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		initial: {
			opacity: 0,
			transform: 'scale(0.75)'
		},

		duration: 200,

		common: ({ side }) => ({
			transformOrigin: {
				top: 'bottom',
				bottom: 'top',
				left: 'right',
				right: 'left'
			}[side]
		})
	});

	const inlineStyles = {
		...transitionStyles,
		['--copy2-tooltip-background']: `hsl(0, 0%, 20%)`
	} as React.CSSProperties;

	return (
		<>
			<div {...props} ref={refs.setReference} {...getReferenceProps()}>
				{children}
			</div>

			<FloatingPortal>
				{isMounted && (
					<div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
						<div className={styles.tooltip} style={inlineStyles}>
							<FloatingArrow ref={arrowRef} context={context} tipRadius={1.5} width={ARROW_WIDTH} height={ARROW_HEIGHT} fill='var(--copy2-tooltip-background)' />
							<p>{text}</p>
						</div>
					</div>
				)}
			</FloatingPortal>
		</>
	);
};
