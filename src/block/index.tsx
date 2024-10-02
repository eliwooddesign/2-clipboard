import { Button, type ButtonProps } from '../button';

export interface CopyBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toCopy?: string;
	button?: ButtonProps;
}

export const CopyBlock = ({ toCopy, button, ...props }: CopyBlockProps) => {
	const { children } = props;

	return (
		<div>
			{children}
			<Button toCopy={toCopy} {...button} />
		</div>
	);
};
