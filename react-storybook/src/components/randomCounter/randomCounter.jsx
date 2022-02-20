import React, { useState, useEffect } from 'react';
import { number, string, func } from 'prop-types';
import { getRandomCount } from '@/utils';
import './randomCounter.css';

const DOC_TITLE = document.title;

/**
 * RandomCounter 컴포넌트
 */
export default function RandomCounter({ min, max, fps, color, onComplete }) {
  const [MAX_COUNT] = useState(getRandomCount(min, max));

  useEffect(
    () => (document.title = `(${MAX_COUNT}) ${DOC_TITLE}`),
    [MAX_COUNT]
  );

  const [count, setCount] = useState(0);

  let isComplete = count >= MAX_COUNT;

  useEffect(() => {
    let clearId = setTimeout(() => {
      if (!isComplete) setCount((count) => count + 1);
      else onComplete?.();
    }, fps);

    return () => clearTimeout(clearId);
  }, [count, fps, isComplete, onComplete]);

  return (
    <output
      data-testid="output"
      className="randomCounter"
      style={{
        ...(!color ? null : { color }),
        ...(!isComplete ? null : { animationName: 'none' }),
      }}
    >
      {count}
    </output>
  );
}

RandomCounter.defaultProps = {
  min: 10,
  max: 100,
  fps: 1000 / 60,
};

RandomCounter.propTypes = {
  /** 최솟값 */
  min: number,
  /** 최댓값 */
  max: number,
  /** 초당 프레임 갯수 */
  fps: number,
  /** 텍스트 컬러 */
  color: string,
  /** 애니메이션 종료 후 실행되는 콜백 함수 */
  onComplete: func,
};
