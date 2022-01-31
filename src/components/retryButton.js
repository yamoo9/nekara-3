import React from 'react';

export default function RetryButton({ onRetry, isDisabled }) {
  return (
    <button
      type="button"
      className="retryButton"
      disabled={isDisabled}
      onClick={onRetry}
    >
      재실행
    </button>
  );
}
