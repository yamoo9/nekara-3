import React from 'react';
import Child from './Child';
import Parent from './Parent';

export default function ParentTwo() {
  return (
    <Parent>
      <Child>child A</Child>
      <Child>child B</Child>
    </Parent>
  );
}
