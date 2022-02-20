import React from 'react';
import { bool, func } from 'prop-types';
import './retryButton.css';


const RetryButton = ({
  fixed,
  hasShadow,
  isDisabled,
  onRetry,
  ...restProps
}) => (
  <button
    type="button"
    className={`retryButton ${hasShadow ? 'hasShadow' : ''} ${
      fixed ? 'fixed' : ''
    }`.trim()}
    disabled={isDisabled}
    onClick={onRetry}
    {...restProps}
  />
);

RetryButton.defaultProps = {
  fixed: false,
  hasShadow: true,
  isDisabled: false,
  children: '재실행',
};

RetryButton.propTypes = {
  /** 고정 위치 설정 */
  fixed: bool,
  /** 버튼 그림자 설정 */
  hasShadow: bool,
  /** 버튼 클릭 이벤트 핸들러 */
  onRetry: func,
  /* 버튼 비활성화 설정 */
  isDisabled: bool,
};

export default RetryButton;
