import './app.css';
import React, { useState, useCallback } from 'react';
import { number, func, bool } from 'prop-types';
import { RandomCounter, RetryButton } from '@/components';


const MIN = 33;
const MAX = 99;
const FPS = 1000 / 60;

/**
 * 랜덤 카운트 업 App 컴포넌트
 */
export function PureApp({ retryKey, updateRetryKey, min, max, fps, isDisable, completeCallback }) {

  return (
    <div className="app" data-testid="app">
      <RandomCounter
        key={retryKey}
        min={min}
        max={max}
        fps={fps}
        onComplete={completeCallback}
      />
      <RetryButton fixed onRetry={updateRetryKey} isDisabled={!isDisable} />
    </div>
  );
}

PureApp.defaultProps = {
  min: 10,
  max: 100,
  fps: 1000 / 60,
};

PureApp.propTypes = {
  retryKey: number.isRequired,
  isDisable: bool.isRequired,
  updateRetryKey: func.isRequired,
  completeCallback: func.isRequired,
  min: number,
  max: number,
  fps: number,
};

/**
 * 커스텀 훅
 */
export const useRetryCountUp = () => {
  
  const [retryKey, setRetryKey] = useState(100);
  const [isDisable, setIsDisable] = useState(false);

  const updateRetryKey = useCallback(() => {
    setRetryKey((key) => key + 1);
    setIsDisable(false);
  }, []);

  const completeCallback = useCallback(() => setIsDisable(true), []);

  return { retryKey, updateRetryKey, isDisable, completeCallback };

}


export default function App() {

  const retryProps = useRetryCountUp();
  
  return (
    <PureApp min={MIN} max={MAX} fps={FPS} {...retryProps}  />
  );
  
}