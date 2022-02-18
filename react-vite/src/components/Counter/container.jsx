import './container.css';
import { useState, useCallback, useMemo } from 'react';

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


  // 하위 중첩된 컴포넌트(값) 기억하기
  const MemoizedCountHeadline = useMemo(() => (
    <CountHeadline>{headline}</CountHeadline>
  ), [headline]);
  
  const MemoizedChangeHeadlineButton = useMemo(() => (
    <Button onClick={handleChangeHeadline}>change headline</Button>
  ), [handleChangeHeadline]);

  const MemoizedCountOutput = useMemo(() => (
    <CountOutput> {count} </CountOutput>
  ), [count]);
  
  const MemoizedDecrementButton = useMemo(() => (
    <Button onClick={handleDecrementCount}> - </Button>
  ), [handleDecrementCount]);
  
  const MemoizedIncrementButton = useMemo(() => (
    <Button onClick={handleIncrementCount}> + </Button>
  ), [handleIncrementCount]);


  return (
    <div className="counter">
      <div className="counter-headline">
        {MemoizedCountHeadline}
        {MemoizedChangeHeadlineButton}
      </div>
      <div>
        {MemoizedDecrementButton}
        {MemoizedCountOutput}
        {MemoizedIncrementButton}
      </div>
    </div>
  );
}
