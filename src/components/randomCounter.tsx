import React, { CSSProperties } from 'react';
import { getRandomCount } from '../utils';

const DOC_TITLE = document.title;

interface Props {
  min?: number;
  max?: number;
  fps?: number;
  onComplete?: () => void;
}

export default function RandomCounter({
  min = 10,
  max = 100,
  fps = 1000 / 60,
  onComplete,
}: Props) {
  const [MAX_COUNT] = React.useState<number>(getRandomCount(min, max));

  React.useEffect(() => {
    document.title = `(${MAX_COUNT}) ${DOC_TITLE}`;
  }, [MAX_COUNT]);

  const [count, setCount] = React.useState(0);

  const isComplete = count >= MAX_COUNT;

  React.useEffect(() => {
    const clearId = setTimeout(() => {
      if (!isComplete) setCount((count) => count + 1);
      else onComplete?.();
    }, fps);

    return () => clearTimeout(clearId);
  }, [count]);

  const styles = (
    isComplete ? { animationName: 'none' } : null
  ) as CSSProperties;

  return (
    <output className="randomCounter" style={styles}>
      {count}
    </output>
  );
}
