import { TaskBoxProvider } from '@/contexts';
import { TaskItem } from './task-item';

export default {
  title: 'TaskBox / Molecules / TaskItem',
  component: TaskItem,
  decorators: [
    (Story) => (
      <TaskBoxProvider value={{}}>
        <div style={{ maxWidth: 320 }}>
          <Story />
        </div>
      </TaskBoxProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#eee' },
        { name: 'darkgray', value: '#424242' },
      ],
    },
  },
  args: {
    ...TaskItem.defaultProps,
    id: 'task-item-diwd',
    headline: 'React Hooks 학습',
    description: 'React 함수 컴포넌트 훅 정리',
    avatar: {
      src: '/api/faces/woman/04.jpg',
      name: '최상희',
    },
  },
};

const Template = (args) => <TaskItem {...args} />;

export const Loading = Template.bind({});

export const Loaded = Template.bind({});
Loaded.args = {
  loading: false,
};

export const Pinned = Template.bind({});
Pinned.args = {
  loading: false,
  pinned: true,
};

export const Archived = Template.bind({});
Archived.args = {
  loading: false,
  pinned: false,
  archived: true,
};

export const PinnedAndArchived = Template.bind({});
PinnedAndArchived.args = {
  loading: false,
  pinned: true,
  archived: true,
};
