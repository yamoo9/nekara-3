import { ComponentMeta, ComponentStory } from '@storybook/react';
import { css } from '@emotion/react';
import { hideNoControlWarning } from '@/utils';
import TaskBox from './task-box';

export default {
  title: 'TaskBox / Pages / TaskBox',
  component: TaskBox,
  ...hideNoControlWarning(),
} as ComponentMeta<typeof TaskBox>;

export const Default: ComponentStory<typeof TaskBox> = () => (
  <TaskBox
    css={css`
      max-width: 420px;
      outline: 1px solid rgba(20 20 20 / 10%);
    `}
  />
);
