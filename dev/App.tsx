/// <reference types="vite/client" />

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import storybookLogo from './assets/storybook.svg';

import styles from './App.module.css';

import { name, description } from '../package.json';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className={styles.app}>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className={[styles.logo, styles.vite].join(' ')} alt='Vite logo' />
				</a>

				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className={[styles.logo, styles.react].join(' ')} alt='React logo' />
				</a>

				<a href='https://storybook.js.org' target='_blank'>
					<img src={storybookLogo} className={[styles.logo, styles.storybook].join(' ')} alt='Storybook logo' />
				</a>
			</div>

			<h1>{name}</h1>

			<p>{description}</p>
		</div>
	</StrictMode>
);
