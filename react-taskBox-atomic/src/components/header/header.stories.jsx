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

export const HeaderOpened = Template.bind({});
HeaderOpened.args = {
  open: true,
};
