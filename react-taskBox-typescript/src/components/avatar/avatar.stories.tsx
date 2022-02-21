import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar } from './avatar';
import { rangeControl, selectControl } from '@/utils';

export default {
  title: 'TaskBox / Atomics / Avatar',
  component: Avatar,
  args: {
    ...Avatar.defaultProps,
    src: '',
  },
  argTypes: {
    size: rangeControl({
      min: 20,
      step: 1,
      max: 36,
    }),
    src: selectControl([
      '/api/faces/woman/01.jpg',
      '/api/faces/woman/02.jpg',
      '/api/faces/woman/03.jpg',
      '/api/faces/woman/04.jpg',
      '/api/faces/woman/05.jpg',
      '/api/faces/man/01.jpg',
      '/api/faces/man/02.jpg',
      '/api/faces/man/03.jpg',
      '/api/faces/man/04.jpg',
      '/api/faces/man/05.jpg',
    ]),
  },
} as ComponentMeta<typeof Avatar>;

const Template:ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Loading = Template.bind({});

export const HasName = Template.bind({});
HasName.args = {
  loading: false,
  src: '/api/faces/woman/03.jpg',
  name: '오현아',
};

export const HasNotName = Template.bind({});
HasNotName.args = {
  loading: false,
  src: '/api/faces/man/03.jpg',
  alt: '이청군',
};
