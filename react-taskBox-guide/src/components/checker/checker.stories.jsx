import { Checker } from './checker';

// Meta 데이터 작성
// 기본 내보내기 필요
export default {
  title: 'TaskBox / Atomics / Checker',
  component: Checker,
  // 모든 컴포넌트의 기본 args
  args: {
    label: '아카이브',
    checked: false,
    loading: false,
    size: 16,
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 12,
        step: 1,
        max: 48,
      },
    },
  },
};

// Component 스토리 작성
// 이름 내보내기 작성

// Component Template 작성
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
