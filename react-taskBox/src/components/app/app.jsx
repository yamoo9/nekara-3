/**@jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useState, useCallback } from 'react';
import { RandomCounter, RetryButton } from '@/components';
// import { Container } from './app.styled';

const MIN = 33;
const MAX = 99;
const FPS = 1000 / 60;

export default function App({ layoutPosition = 'center' }) {

  const [retryKey, setRetryKey] = useState(100);
  const [isDisable, setIsDisable] = useState(false);

  const updateRetryKey = useCallback(() => {
    setRetryKey((key) => key + 1);
    setIsDisable(false);
  }, []);

  const completeCallback = useCallback(() => setIsDisable(true), []);


  return (
    // JSX → React.createElement(type, props) API (valid html prop)
    // Babel JSX Pragma (Default: React) → jsx
    // changed pragma : jsx(type, props: {css})
    <div css={
      // method 1. template liternal
      // css`
      //   display: flex;
      //   justify-content: ${layoutPosition};
      //   align-items: ${layoutPosition};
      //   min-height: inherit;
      // `

      // method 2. object styles
      css({
        display: 'flex',
        justifyContent: layoutPosition,
        alignItems: layoutPosition,
        minHeight: 'inherit',
      })
    }>
      <RandomCounter
        key={retryKey}
        min={MIN}
        max={MAX}
        fps={FPS}
        onComplete={completeCallback}
      />
      <RetryButton onRetry={updateRetryKey} isDisabled={!isDisable} />
    </div>
  );
  
}
