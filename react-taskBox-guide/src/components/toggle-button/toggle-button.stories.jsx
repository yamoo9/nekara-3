import { ToggleButton } from './toggle-button';

export default {
  title: 'TaskBox / Atomics / ToggleButton',
  component: ToggleButton,
  args: {
    ...ToggleButton.defaultProps,
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 12,
        step: 2,
        max: 100,
      },
    },
  },
};

const Template = (args) => <ToggleButton {...args} />;

export const ToggleButtonClosed = Template.bind({});

export const ToggleButtonOpened = Template.bind({});
ToggleButtonOpened.args = {
  open: true,
};
