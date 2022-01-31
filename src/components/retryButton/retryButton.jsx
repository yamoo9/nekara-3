import React from 'react'
import './retryButton.css';

const RetryButton = ({ onRetry, isDisabled }) => (
  <button
    type="button"
    className="retryButton"
    disabled={isDisabled}
    onClick={onRetry}
  >
    재실행
  </button>
);

export default RetryButton;
