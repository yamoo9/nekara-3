import RandomCounter from './randomCounter';
import AppStoriesMeta from '../app/app.stories';


export default {
  title: 'RandomCountUp/RandomCounter',
  component: RandomCounter,
  parameters: {
    ...AppStoriesMeta.parameters,
  },
  decorators: [(story) => <div className="app">{story()}</div>],
  args: { ...RandomCounter.defaultProps },
};

const Template = (args) => <RandomCounter {...args} />;

export const Default = Template.bind({});

export const SetColor = Template.bind({});
SetColor.args = {
  color: '#27fee9',
};
SetColor.parameters = {
  docs: {
    description: {
      story: '텍스트 색상 변경',
    },
  },
};

export const SetFps10 = Template.bind({});
SetFps10.args = {
  min: 10,
  max: 20,
  fps: 1000 / 10,
};
SetFps10.parameters = {
  docs: {
    description: {
      story: '초당 프레임 수 10 설정',
    },
  },
};

export const SetMin30 = Template.bind({});
SetMin30.args = {
  min: 30,
};
SetMin30.parameters = {
  docs: {
    description: {
      story: '최솟값 30 설정',
    },
  },
};

export const SetMax50 = Template.bind({});
SetMax50.args = {
  max: 50,
};
SetMax50.parameters = {
  docs: {
    description: {
      story: '최댓값 50 설정',
    },
  },
};

export const SetMin20Max40 = Template.bind({});
SetMin20Max40.args = {
  min: 20,
  max: 40,
};
SetMin20Max40.parameters = {
  docs: {
    description: {
      story: '최솟값 20 — 최댓값 40 설정'
    }
  }
}
