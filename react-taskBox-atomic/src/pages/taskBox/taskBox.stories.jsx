import { css } from '@emotion/react';
import { hideNoControlWarning } from '@/utils';
import TaskBox from './taskBox';

export default {
  title: 'TaskBox / Pages / TaskBox',
  component: TaskBox,
  ...hideNoControlWarning(),
};

export const Default = () => <TaskBox css={css`
  max-width: 420px;
  outline: 1px solid rgba(20 20 20 / 10%);
`} />;
