import { css } from '@emotion/react';
import { Header } from './header';

export default {
  title: 'TaskBox / Molecules / Header',
  component: Header,
  args: {
    ...Header.defaultProps,
  },
};

const Template = (args) => <Header {...args} />;

export const HeaderClosed = Template.bind({});
HeaderClosed.parameters = {
  backgrounds: {
    default: 'gray',
    values: [
      { name: 'gray', value: '#f3f3f3' },
      { name: 'dark', value: '#111' },
    ],
  },
};

export const HeaderOpenned = Template.bind({});
HeaderOpenned.args = {
  open: true,
};
HeaderOpenned.parameters = {
  backgrounds: {
    default: 'gray',
    values: [
      { name: 'gray', value: '#f3f3f3' },
      { name: 'dark', value: '#111' },
    ],
  },
};
