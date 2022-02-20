import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { Container } from './randomCounter.styled';
import { getRandomCount } from '@/utils';

const base = css`
  color: #e4fe48;
`;

const extend = css`
  color: #1fa7fd;
`;

const DOC_TITLE = document.title;

export default function RandomCounter({
  min = 10,
  max = 100,
  fps = 1000 / 60,
  onComplete,
}) {
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
    <Container
      // css={[base, extend]}
      css={[extend, base]}
      style={!isComplete ? null : { animationName: 'none' }}
    >
      {count}
    </Container>
  );
}
