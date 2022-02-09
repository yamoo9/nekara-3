import React from 'react'
import './retryButton.css';

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
