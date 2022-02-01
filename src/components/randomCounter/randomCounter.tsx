import styles from './randomCounter.module.css';
import { useState, useEffect, CSSProperties } from 'react';
import { getRandomCount } from '@/utils';

interface Props {
  min?: number;
  max?: number;
  fps?: number;
  onComplete?: () => void;
}

const DOC_TITLE = document.title;

export default function RandomCounter({
  min = 10,
  max = 100,
  fps = 1000 / 60,
  onComplete,
}: Props) {
  const [MAX_COUNT] = useState(getRandomCount(min, max));

  useEffect(
    () => {
      document.title = `(${MAX_COUNT}) ${DOC_TITLE}`
    },
    [MAX_COUNT]
  );

  const [count, setCount] = useState(0);

  const isComplete = count >= MAX_COUNT;

  useEffect(() => {
    const clearId = setTimeout(() => {
      if (!isComplete) setCount((count) => count + 1);
      else onComplete?.();
    }, fps);

    return () => clearTimeout(clearId);
  }, [count, fps, isComplete, onComplete]);

  const outputStyle = (!isComplete ? null : { animationName: 'none' }) as CSSProperties;

  return (
    <output
      className={styles.randomCounter}
      style={outputStyle}
    >
      {count}
    </output>
  );
}
