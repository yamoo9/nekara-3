import loadable from '@loadable/component';
import { Spinner } from 'components';

const fallbackComponent = {
  fallback: (
    <Spinner
      size={200}
      messages={{
        start: '페이지 이동이 시작되었습니다.',
        end: '페이지 이동이 종료되었습니다.',
      }}
    />
  ),
};

export const lazyComponent = (lazyCallback) =>
  loadable(lazyCallback, fallbackComponent);
