import React from 'react';
// import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Logo, { SVGLogo } from './logo';

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

});


// React TDD => jest, jest-dom, testing-library/react
// React CDD => Storybook

describe('SVGLogo 컴포넌트', () => {
  
  test('컴포넌트의 title prop 기본 값은 "뱅크사인"이다.', () => {
    render(<SVGLogo />);
    const logo = screen.getByTestId('logo');
    expect(logo).toHaveAttribute('title', SVGLogo.defaultProps.title);
  });
  
  // test('사용자가 설정한 `title` prop은 SVG 요소의 <title> 요소 값으로 설정된다.', () => {
  //   let testTitle = 'Bank Sign';

  //   const container = document.createElement('div');
  //   ReactDOM.render(<SVGLogo title={testTitle} />, container);

  //   // 검토... 정리 안내
  //   const svgNode = container.querySelector('svg');
  //   const titleInSvgNode = svgNode.querySelector('title');
  //   expect(titleInSvgNode.getAttribute('title')).toBe(testTitle);
  // });

});

