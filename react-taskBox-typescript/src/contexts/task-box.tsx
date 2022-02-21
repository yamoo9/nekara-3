import { createContext, useContext, useMemo } from 'react';
import { TaskBoxContextValue, TaskBoxProviderProps } from '@/types';

const TaskBoxContext = createContext<TaskBoxContextValue>(null);

export const TaskBoxProvider = (props: TaskBoxProviderProps) => {
  return <TaskBoxContext.Provider {...props} />;
};

export const useTaskBox = () => {
  const context = useContext<TaskBoxContextValue>(TaskBoxContext);

  if (!context) {
    throw new Error(
      'TaskBoxProvider 내부에 위치한 컴포넌트 안에서만 useTaskBox 훅을 호출할 수 있습니다.'
    );
  }

  return useMemo(() => context, [context]);
};
