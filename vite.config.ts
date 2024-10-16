import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';

import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

import { peerDependencies, name } from './package.json';

export default defineConfig({
	build: {
		target: 'esnext',

		lib: {
			name,
			entry: resolve(__dirname, join('src', 'index.ts')),
			fileName: 'index',
			formats: ['es', 'umd', 'cjs']
		},

		rollupOptions: {
			output: {
				dir: 'dist'
			},

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
				pattern: 'copy-2cb-[hash]-[local]',
				dashedIdents: true
			}
		}
	},

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},

	plugins: [react(), dts({ rollupTypes: true })],

	mode: 'production'
});
