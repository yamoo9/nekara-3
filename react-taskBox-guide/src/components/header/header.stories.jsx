import { css } from '@emotion/react';
import { Header } from './header';

export default {
  title: 'TaskBox / Molecules / Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#eee' },
        { name: 'darkgray', value: '#424242' },
      ],
    },
  },
  args: {
    ...Header.defaultProps,
  },
};

const Template = (args) => <Header {...args} />;

export const HeaderClosed = Template.bind({});

export const HeaderOpenned = Template.bind({});
HeaderOpenned.args = {
  open: true,
};
