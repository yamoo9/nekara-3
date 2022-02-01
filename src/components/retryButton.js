function RetryButton({ onRetry, isDisabled }) {
  return React.createElement(
    'button', 
    { 
      type: 'button',
      className: 'retryButton',
      disabled: isDisabled,
      onClick: onRetry
    }, 
    '재실행'
  );
}
