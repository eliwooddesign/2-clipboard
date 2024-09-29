import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

// *
// * BASE
// * ==================================== * //

const meta = {
	title: 'Component/Button',
	component: Button,
	argTypes: {
		backgroundColor: {
			control: 'color'
		}
	},
	args: {
		onClick: fn()
	}
} satisfies Meta<typeof Button>;

export default meta;

// *
// * VARIANTS
// * ==================================== * //

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true
	}
};

export const Secondary: Story = {
	args: {
		primary: false
	}
};

export const Large: Story = {
	args: {
		size: 'large'
	}
};

export const Small: Story = {
	args: {
		size: 'small'
	}
};
