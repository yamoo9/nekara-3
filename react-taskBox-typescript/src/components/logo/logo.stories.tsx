import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from './logo';
import { rangeControl } from '@/utils';

export default {
  title: 'TaskBox / Atomics / Logo',
  component: Logo,
  args: {
    ...Logo.defaultProps,
  },
  argTypes: {
    size: rangeControl({
      min: 14,
      step: 2,
      max: 100,
    }),
  },
} as ComponentMeta<typeof Logo>;

const Template:ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoLight = Template.bind({});

export const LogoHomeLink = Template.bind({});
LogoHomeLink.args = {
  homelink: true,
};

export const LogoDark = Template.bind({});
LogoDark.args = {
  dark: true,
};
LogoDark.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#111' }],
  },
};

export const LogoDarkHomeLink = Template.bind({});
LogoDarkHomeLink.args = {
  dark: true,
  homelink: true,
};
LogoDarkHomeLink.parameters = {
  ...LogoDark.parameters,
};
