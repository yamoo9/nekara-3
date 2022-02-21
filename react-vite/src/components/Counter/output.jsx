import { memo } from 'react';

function PureCountOutput({children}) {
  return (
    <output>{children}</output>
  )
}

export const CountOutput = memo(PureCountOutput);