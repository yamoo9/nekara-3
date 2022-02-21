import { useState } from 'react';
import GrandParent from './GrandParent';
import ParentTwo from './ParentTwo';
import ParentOne from './ParentOne';
import Parent from './Parent';
import Child from './Child';
import { DataProvider } from './context';

export default function ContextExample() {
  // 상태 끌어올리기 (관리)
  const [data] = useState([
    {
      name: 'grand1',
      children: [
        {
          name: 'parent1-1',
          children: [{ name: 'child1' }, { name: 'child2' }],
        },
      ],
    },
    {
      name: 'grand2',
      children: [
        {
          name: 'parent2-1',
          children: [
            { name: 'child2-1' },
            { name: 'child2-2' },
            { name: 'child2-3' },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <DataProvider value={data}>
        <GrandParent>
          <ParentTwo />
          <ParentOne />
        </GrandParent>
        <GrandParent>
          <Parent>
            <Child>child 4</Child>
            <Child>child 8</Child>
            <Child>child 12</Child>
          </Parent>
        </GrandParent>
        <Child>다른 컨텍스트의 Child 컴포넌트</Child>
      </DataProvider>
    </>
  );
}
