import React from 'react'
import styled from '@emotion/styled/macro';


const PureRetryButton = ({ onRetry, isDisabled, ...restProps }) => (
  <button
    type="button"
    disabled={isDisabled}
    onClick={onRetry}
    {...restProps} // Props 객체 전개
  >
    재실행
  </button>
);

// React 컴포너트 스타일 확장
const RetryButton = styled(PureRetryButton)`
  cursor: pointer;
  position: fixed;
  z-index: 100;
  left: 50%;
  bottom: 10vh;
  transform: translateX(-50%);
  border: 0;
  border-radius: 3px;
  padding: 0.85rem 2.5rem;
  background: var(--color-gray-100);
  color: var(--color-gray-800);
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.15s ease-out;

  &:hover {
    background: var(--color-white);
    color: var(--color-primary-700);
    transform: translate(-50%, -5%);
  }

  &:focus {
    outline: 5px solid var(--color-primary-500);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--color-gray-900);
    color: var(--color-gray-600);
  }
`;

export default RetryButton;
