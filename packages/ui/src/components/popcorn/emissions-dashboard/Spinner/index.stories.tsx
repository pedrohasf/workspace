// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Spinner from './index';

export default {
  title: 'Emissions Dashboard / Components / Spinner',
  component: Spinner,
  decorators: [
    (Story) => (
      <div className="flex flex-row justify-center">
        <Story></Story>
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};