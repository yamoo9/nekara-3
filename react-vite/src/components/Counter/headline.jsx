import * as React from 'react';

function PureCountHeadline({ as: Component = 'h2', children }) {
  return <Component>{children}</Component>;
}

export const CountHeadline = React.memo(PureCountHeadline);
