import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './logo';

// test suite
describe('Logo 컴포넌트', () => {
  render(<Logo />);
  const imgNode = screen.getByRole('img');

  // test case
  test('img 요소를 포함한다.', () => {
    expect(imgNode).toContainElement(imgNode);
  });
  
  test('포함하는 img 요소의 alt와 title은 값이 동일하다.', () => { 
    let labelOfImgNode = imgNode.getAttribute('alt');
    expect(imgNode).toHaveAttribute('alt', labelOfImgNode);
    expect(imgNode).toHaveAttribute('title', labelOfImgNode);
  });
  
  test('포함하는 img 요소의 URL은 정적 자산을 사용한다.', () => { 
    let imagePath = imgNode.getAttribute('src');
    expect(imagePath).toBe(`${process.env.PUBLIC_URL}/assets/banksign.svg`);
  });

})

