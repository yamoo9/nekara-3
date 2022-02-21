import React from 'react';
import Child from './Child';
import Parent from './Parent';

export default function ParentOne() {
  return (
    <Parent>
      <Child>child Z</Child>
    </Parent>
  );
}
