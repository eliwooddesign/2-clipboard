import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';

import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

import { peerDependencies } from './package.json';

export default defineConfig({
	build: {
		target: 'esnext',

		lib: {
			entry: resolve(__dirname, join('src', 'index.ts')),
			fileName: 'index',
			formats: ['es', 'cjs']
		},

		rollupOptions: {
			external: ['react/jsx-runtime', ...Object.keys(peerDependencies)]
		},

		minify: false,
		cssMinify: 'lightningcss'
	},

	css: {
		transformer: 'lightningcss',

		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
			cssModules: {
				pattern: 'copy-2cb-[name]-[hash]-[local]'
			}
		}
	},

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},

	plugins: [react(), dts({ rollupTypes: true })]
});
