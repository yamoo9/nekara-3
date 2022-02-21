import { ComponentMeta, ComponentStory } from '@storybook/react';
import { rangeControl } from '@/utils';
import { ToggleButton } from './toggle-button';

export default {
  title: 'TaskBox / Atomics / ToggleButton',
  component: ToggleButton,
  args: {
    ...ToggleButton.defaultProps,
  },
  argTypes: {
    size: rangeControl({
      min: 12,
      step: 2,
      max: 100,
    }),
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const ToggleButtonClosed = Template.bind({});

export const ToggleButtonOpened = Template.bind({});
ToggleButtonOpened.args = {
  open: true,
};
