// import styles from 'Button.module.css';

export interface ButtonProps {
	primary?: boolean;
	size?: 'small' | 'medium' | 'large';
	backgroundColor?: string;
	onClick: () => void;
}

export const Button = ({ ...props }: ButtonProps) => {
	return (
		<button {...props} type='button'>
			Button
		</button>
	);
};
