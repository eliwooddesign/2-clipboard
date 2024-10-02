import { useRef, useState } from 'react';
import { useFloating, autoUpdate, offset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions, FloatingPortal, arrow, FloatingArrow, useTransitionStyles } from '@floating-ui/react';

import styles from './style.module.css';

const ARROW_WIDTH = 12;
const ARROW_HEIGHT = ARROW_WIDTH / 2;
const ARROW_RADIUS = ARROW_HEIGHT / 3;

const OFFSET = ARROW_HEIGHT;

export interface TooltipProps extends React.HTMLProps<HTMLSpanElement> {
	text: string;
	enabled?: boolean;
}

export const Tooltip = ({ text, enabled = true, children, ...props }: TooltipProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const arrowRef = useRef(null);

	const { refs, floatingStyles, context } = useFloating({
		placement: 'left',

		open: isOpen,
		onOpenChange: setIsOpen,

		whileElementsMounted: autoUpdate,

		middleware: [
			offset(OFFSET),
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
			close: 250
		}
	});

	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });

	const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		initial: {
			opacity: 0,
			transform: 'scale(0)'
		},

		duration: 200,

		common: ({ side }) => ({
			transformOrigin: {
				top: 'bottom',
				bottom: 'top',
				left: `calc(100% + ${ARROW_WIDTH}px)`,
				right: 'left'
			}[side]
		})
	});

	if (!enabled) {
		return <span {...props}>{children}</span>;
	}

	return (
		<>
			<span {...props} ref={refs.setReference} {...getReferenceProps()}>
				{children}
			</span>

			<FloatingPortal>
				{isMounted && (
					<div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
						<div className={styles.tooltip} style={transitionStyles}>
							<FloatingArrow ref={arrowRef} context={context} tipRadius={ARROW_RADIUS} width={ARROW_WIDTH} height={ARROW_HEIGHT} fill='var(--copy2-tooltip-background)' />
							<p>{text}</p>
						</div>
					</div>
				)}
			</FloatingPortal>
		</>
	);
};
