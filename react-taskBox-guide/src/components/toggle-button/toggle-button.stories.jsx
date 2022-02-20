import { ToggleButton } from './toggle-button';
import { rangeControl } from '@/utils';

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
};

const Template = (args) => <ToggleButton {...args} />;

export const ToggleButtonClosed = Template.bind({});

export const ToggleButtonOpened = Template.bind({});
ToggleButtonOpened.args = {
  open: true,
};
