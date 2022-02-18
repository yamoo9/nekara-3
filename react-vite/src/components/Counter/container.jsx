import './container.css';
import { useState } from 'react';

import { CountHeadline } from './headline';
import { CountOutput } from './output';
import { Button } from './button';

// useCallback vs useMemo

export function CountContainer() {
  
  const [headline, setHeadline] = useState('Counter');
  const handleChangeHeadline = () => setHeadline('Updated Counter Headnline');

  const [count, setCount] = useState(10);
  const handleDecrementCount = () => setCount((prevCount) => prevCount - 1);
  const handleIncrementCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter">
      <div className="counter-headline">
        <CountHeadline> {headline} </CountHeadline>
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
