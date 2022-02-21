import { ComponentMeta, ComponentStory } from '@storybook/react';
import taskList from '../../../public/api/taskList.json';
import { TaskBoxProvider } from '@/contexts';
import { TaskList } from './task-list';

export default {
  title: 'TaskBox / Organisms / TaskList',
  component: TaskList,
  decorators: [
    (Story) => (
      <TaskBoxProvider value={{
        updatePin() {},
        updateArchive() {},
      }}>
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
    ...TaskList.defaultProps,
  },
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => <TaskList {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  loading: false,
  items: [],
};

export const HasError = Template.bind({});
HasError.args = {
  error: true,
};

export const Loaded = Template.bind({});
Loaded.args = {
  loading: false,
  items: taskList.slice(),
};

export const Pinned = Template.bind({});
Pinned.args = {
  loading: false,
  items: taskList.map((item: any, index: number) => {
    if (index === 2) {
      return {
        ...item,
        pinned: true,
      };
    }
    return item;
  }),
};

export const Archived = Template.bind({});
Archived.args = {
  loading: false,
  items: taskList.map((item: any, index: number) => {
    if (index === 1) {
      return {
        ...item,
        pinned: true,
      };
    }
    if (index === 2) {
      return {
        ...item,
        archived: true,
      };
    }
    return item;
  }),
};

export const VisibleArchived = Template.bind({});
VisibleArchived.args = {
  ...Archived.args,
  items: taskList.map((item: any, index: number) => {
    if (index === 2) {
      return {
        ...item,
        pinned: true,
      };
    }
    if (index === 3) {
      return {
        ...item,
        archived: true,
        pinned: true,
      };
    }
    return item;
  }),
  visibleArchived: true,
};
