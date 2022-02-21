import { css } from '@emotion/react';
import { hideNoControlWarning, designFigma } from '@/utils'
import TaskBox from './taskBox';

export default {
  title: 'TaskBox / Pages / TaskBox',
  component: TaskBox,
  ...hideNoControlWarning(designFigma('https://www.figma.com/file/qbQoxOz0eOlJIFTxgHlSUL/Task-List?node-id=0%3A1')),
};

export const Default = () => <TaskBox css={css`
  max-width: 420px;
  outline: 1px solid rgba(20 20 20 / 10%);
`} />;
