export type TaskBoxContextValue = null | {
  updatePin(id: string): void;
  updateArchive(id: string): void;
};

export interface TaskBoxProviderProps {
  value: TaskBoxContextValue;
  children?: JSX.Element;
}