import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderClosed = Template.bind({});

export const HeaderOpened = Template.bind({});
HeaderOpened.args = {
  open: true,
};
