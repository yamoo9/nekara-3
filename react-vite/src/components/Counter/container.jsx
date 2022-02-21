import './container.css';
import { useState, useCallback } from 'react';

import { CountHeadline } from './headline';
import { CountOutput } from './output';
import { Button } from './button';

// useCallback (함수 값 기억하기) vs useMemo (어떤 값(컴포넌트도 가능)이든 기억 가능)

export function CountContainer() {

  const [headline, setHeadline] = useState('Counter');
  const handleChangeHeadline = useCallback(
    () => setHeadline('Updated Counter Headnline'),
    []
  );

  const [count, setCount] = useState(10);

  const handleDecrementCount = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );

  const handleIncrementCount = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );

  return (
    <div className="counter">
      <div className="counter-headline">
        <CountHeadline>{headline}</CountHeadline>
        <Button onClick={handleChangeHeadline}>change headline</Button>
      </div>
      <div>
        <Button onClick={handleDecrementCount}> - </Button>
        <CountOutput> {count} </CountOutput>
        <Button onClick={handleIncrementCount}> + </Button>
      </div>
    </div>
  );
}
