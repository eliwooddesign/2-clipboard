import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

import { peerDependencies } from './package.json';

export default defineConfig({
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
	},

	plugins: [
		react(),
		dts({
			rollupTypes: true
		})
	]
});
