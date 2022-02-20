import { css } from '@emotion/react';
import TaskBox from './taskBox';

export default {
  title: 'TaskBox / Pages / TaskBox',
  component: TaskBox,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

export const Default = () => <TaskBox css={css`
  max-width: 420px;
  outline: 1px solid rgba(20 20 20 / 10%);
`} />;
