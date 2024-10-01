import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: '@storybook/react-vite',

	stories: [
		// prettier-ignore
		'../src/**/*.mdx',
		'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
		'../src/**/stories.@(js|jsx|mjs|ts|tsx)'
	],

	staticDirs: [
		// prettier-ignore
		'../src/assets'
	],

	addons: [
		// prettier-ignore
		"@storybook/addon-onboarding",
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-themes'
	],

	viteFinal: (config) => {
		// modify the Vite config here
		return config;
	}
};

export default config;
