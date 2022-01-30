import React from 'react';

interface Props {
  onRetry?: () => void;
  isDisabled?: boolean;
}

export default function RetryButton({ onRetry, isDisabled }: Props) {
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
