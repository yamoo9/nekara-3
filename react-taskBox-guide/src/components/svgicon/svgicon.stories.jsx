import { SVGIcon, iconTypes } from './svgicon.jsx';

const langeControl = {
  control: {
    type: 'range',
    min: 12,
    step: 2,
    max: 200
  },
}

export default {
  title: 'TaskBox / Atomics / SVGIcon',
  component: SVGIcon,
  args: {
    ...SVGIcon.defaultProps,
  },
  argTypes: {
    size: langeControl,
    width: langeControl,
    height: langeControl
  }
};


const Template = (args) => <SVGIcon {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  id: 'checker-loading',
  label: '로딩 중...',
};

export const UnChecked = Template.bind({});
UnChecked.args = {
  id: 'checker-unchecked',
  label: '체크 안함',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checker-checked',
  label: '체크 함',
};


export const PinLoading = Template.bind({});
PinLoading.args = {
  id: 'pin-loading',
  label: '로딩 중...',
};

export const PinDeactive = Template.bind({});
PinDeactive.args = {
  id: 'pin-deactive',
  label: '핀 비활성',
};

export const PinActive = Template.bind({});
PinActive.args = {
  id: 'pin-active',
  label: '핀 활성',
};

export const ToggleButton = Template.bind({});
ToggleButton.args = {
  id: 'toggleButton-closed',
  label: '메뉴 열림',
};

export const ToggleButtonOpenned = Template.bind({});
ToggleButtonOpenned.args = {
  id: 'toggleButton-openned',
  label: '메뉴 닫힘',
};

export const Logo = Template.bind({});
Logo.args = {
  id: 'logo-light',
  label: '로고 (라이트 버전)',
};

export const LogoDark = Template.bind({});
LogoDark.args = {
  id: 'logo-dark',
  label: '로고 (다크 버전)',
};
LogoDark.parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: '#111' }
    ]
  }
}
