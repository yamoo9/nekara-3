import loadable from '@loadable/component';
import { Spinner } from 'components';

const fallbackLoadable = {
  fallback: (
    <Spinner
      stroke="rgba(38, 227, 192, 0.65)"
      messages={{
        begin: '페이지 이동 중입니다.',
        finish: '페이지 이동이 완료되었습니다.',
      }}
    />
  ),
};

export const lazyComponent = (callback) =>
  loadable(
    callback,
    fallbackLoadable
  );

export * from './isType';
export * from './classNames';
export * from './getPublicPath';