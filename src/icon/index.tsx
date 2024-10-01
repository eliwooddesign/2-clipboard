import styles from './style.module.css';

export const Icon = ({ size = 20 }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' className={styles.icon}>
			<rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
			<path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
		</svg>
	);
};