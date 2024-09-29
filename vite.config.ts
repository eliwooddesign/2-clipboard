import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

import { peerDependencies } from './package.json';

export default defineConfig({
	plugins: [
		// prettier-ignore
		react(),
		dts({ rollupTypes: true })
	],

	build: {
		target: 'esnext',
		minify: false,

		lib: {
			entry: resolve(__dirname, join('src', 'index.ts')),
			fileName: 'index',
			formats: ['es', 'cjs']
		},

		rollupOptions: {
			external: ['react/jsx-runtime', ...Object.keys(peerDependencies)]
		}
	}
});
