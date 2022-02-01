import styles from './retryButton.module.css';

interface Props {
  onRetry?: () => void;
  isDisabled: boolean;
}

export default function RetryButton({ onRetry, isDisabled = false }: Props) {
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
