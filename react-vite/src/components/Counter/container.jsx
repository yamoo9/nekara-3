import './container.css';

import { CountHeadline } from './headline';
import { CountOutput } from './output';
import { CountButton } from './button';

export function CountContainer() {
  return (
    <div className="counter">
      <CountHeadline> Counter </CountHeadline>
      <div>
        <CountButton> - </CountButton>
        <CountOutput> 0 </CountOutput>
        <CountButton> + </CountButton>
      </div>
    </div>
  );
}
