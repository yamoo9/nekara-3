// 함수 문 → 화살표 함수 식
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
