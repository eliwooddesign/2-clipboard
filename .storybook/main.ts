import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: '@storybook/react-vite',

	stories: [
		// prettier-ignore
		'../src/**/*.mdx',
		'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
		'../src/**/stories.@(js|jsx|mjs|ts|tsx)'
	],

	addons: [
		// prettier-ignore
		"@storybook/addon-onboarding",
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-themes'
	]
};

export default config;
