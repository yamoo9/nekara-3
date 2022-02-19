import { PinButton } from './pin-button';

export default {
  title: 'TaskBox / Atomics / PinButton',
  component: PinButton,
  args: {
    ...PinButton.defaultProps,
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 20,
        step: 2,
        max: 40,
      },
    },
  },
};

const Template = (args) => <PinButton {...args} />;

export const Loading = Template.bind({});

export const Deactive = Template.bind({});
Deactive.args = {
  loading: false,
  type: 'deactive',
};

export const Active = Template.bind({});
Active.args = {
  loading: false,
  type: 'active',
};
