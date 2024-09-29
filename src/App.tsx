import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

import styles from './App.module.css';

function App() {
	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>

				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>

			<h1>React + Vite + Storybook</h1>

			<p className={styles['read-the-docs']}>Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
