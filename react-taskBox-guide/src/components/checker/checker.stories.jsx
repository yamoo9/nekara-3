import { Checker } from './checker';
import { rangeControl } from '@/utils';

export default {
  title: 'TaskBox / Atomics / Checker',
  component: Checker,
  args: {
    label: '아카이브',
    checked: false,
    loading: false,
    size: 16,
  },
  argTypes: {
    size: rangeControl({
      min: 12,
      step: 1,
      max: 48,
    }),
  },
};

const Template = (args) => <Checker {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Default = Template.bind({});
Default.storyName = 'Un Checked';

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
