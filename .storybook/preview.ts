import type { Preview } from '@storybook/react';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
	parameters: {
		layout: 'centered',

		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},

	decorators: [
		withThemeByDataAttribute({
			defaultTheme: 'light',

			themes: {
				light: 'light',
				dark: 'dark'
			},

			attributeName: 'data-theme'
		})
	],

	tags: ['autodocs']
};

export default preview;
