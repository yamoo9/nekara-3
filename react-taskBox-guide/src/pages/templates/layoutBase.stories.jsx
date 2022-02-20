import { LayoutBase } from './layoutBase';
import { SVGIcon } from '@/components';
import { css } from '@emotion/react';

export default {
  title: 'TaskBox / Templates / LayoutBase',
  component: LayoutBase,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Template = (args) => <LayoutBase css={css`min-height: 100vh;`} {...args} />;

export const Default = Template.bind({});

export const HasChildren = Template.bind({});
HasChildren.args = {
  children: (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <SVGIcon id="pin-deactive" size={70} />
    </div>
  ),
};
