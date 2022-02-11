import React from 'react';
import { render } from 'react-dom';
import Logo from './logo';

// test suite
describe('Logo 컴포넌트', () => {
  const container = document.createElement('div');
  render(<Logo />, container);
  const imgNode = container.querySelector('img');

  // test case
  test('img 요소를 포함한다.', () => {
    expect(imgNode).toContainElement(imgNode);
  });
  
  it('포함하는 img 요소의 alt와 title은 값이 동일하다.', () => { 
    let labelOfImgNode = imgNode.getAttribute('alt');
    expect(imgNode).toHaveAttribute('alt', labelOfImgNode);
    expect(imgNode).toHaveAttribute('title', labelOfImgNode);
  });
  
  it('포함하는 img 요소의 URL은 정적 자산을 사용한다.', () => { 
    let imagePath = imgNode.getAttribute('src');
    expect(imagePath).toBe(`${process.env.PUBLIC_URL}/assets/banksign.svg`);
  });

})

