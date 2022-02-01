import styles from './retryButton.module.css';

export default function RetryButton({ onRetry, isDisabled }) {
  return (
    <button
      type="button"
      className={styles.retryButton}
      disabled={isDisabled}
      onClick={onRetry}
    >
      재실행
    </button>
  );
}
