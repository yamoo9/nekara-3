import * as React from 'react';
import { withData } from './context';

function PureChild({ context, children, ...restProps }) {
  console.log(context);
  
  return (
    <div className="child" {...restProps}>
      {children}
    </div>
  );
}

export default withData(PureChild);