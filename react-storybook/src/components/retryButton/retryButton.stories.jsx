import RetryButton from './retryButton';
import AppStoriesMeta from '../app/app.stories';

export default {
  title: 'RandomCountUp/RetryButton',
  component: RetryButton,
  parameters: {
    ...AppStoriesMeta.parameters,
    docs: {
      description: {
        component: 'RetryButton 컴포넌트',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
  args: { ...RetryButton.defaultProps },
  argTypes: {
    isDisabled: {
      description: '버튼 비활성 설정',
      // control: {
      //   type: 'radio',
      //   options: [false, true]
      // },
      // table: {
      //   type: {
      //     summary: 'RetryButton 컴포넌트 비활성화',
      //     detail: 'RetryButton 컴포넌트를 활성 또는 비활성 모드로 변경합니다.',
      //   },
      // },
    },
    children: {
      table: { disable: true },
      control: { disable: true },
    },
  },
};

const Template = (args) => <RetryButton {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: '클릭 비활성 상태',
    },
  },
};

export const UnShadow = Template.bind({});
UnShadow.args = {
  hasShadow: false,
};
UnShadow.parameters = {
  docs: {
    description: {
      story: '그림자 비활성화 상태',
    },
  },
};

export const DisabledAndUnShadow = Template.bind({});
DisabledAndUnShadow.args = {
  hasShadow: false,
  isDisabled: true,
};
DisabledAndUnShadow.parameters = {
  docs: {
    description: {
      story: '버튼 클릭 이벤트 및 그림자 비활성화 상태',
    },
  },
};

export const Fixed = Template.bind({});
Fixed.args = {
  fixed: true,
};
Fixed.parameters = {
  docs: {
    description: {
      story: '고정 위치 설정 상태',
    },
  },
};
