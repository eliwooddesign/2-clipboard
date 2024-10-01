import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

// *
// * Metadata
// * ==================================== * //

const meta = {
	title: 'Button',

	component: Button,

	argTypes: {},

	args: {
		onClick: fn()
	}
} satisfies Meta<typeof Button>;

export default meta;

// *
// * Stories
// * ==================================== * //

type Story = StoryObj<typeof meta>;

export const Block: Story = {
	args: {
		copyValue: 'This is a block button'
	}
};

export const Inline: Story = {
	args: {
		copyValue: 'This is an inline button'
	}
};
