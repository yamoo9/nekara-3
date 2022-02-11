import { render, screen } from '@testing-library/react'
import { SVGLogo } from 'components'
import Link from './link';


describe('Link 컴포넌트', () => {
  
  test('컴포넌트는 a 요소로 렌더링 된다.', () => {
    render(<Link />);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
  });


  test('a 요소의 클래스 이름은 "Link" 이다.', () => {
    render(<Link />);
    const link = screen.getByTestId('link');
    expect(link).toHaveClass('link');
  });
  
  test('a 요소에 사용자가 정의한 클래스를 추가하면 기본 클래스 이름과 병합된다.', () => {
    let customClassName = 'userDefined';
    render(<Link className={customClassName} />);
    const link = screen.getByTestId('link');
    expect(link).toHaveClass(`link ${customClassName}`);
  });
  
  test('사용자가 정의한 클래스 이름에 공백이 포함될지라도 클래스 이름은 좌우 공백이 제거된다.', () => {
    let customClassName = '      hasSpaceBetween    ';
    render(<Link className={customClassName} />);
    const link = screen.getByTestId('link');
    expect(link.className).toBe(`link ${customClassName.trim()}`);
  });

  test('기본적으로 외부 링크 설정이 아니므로 target, rel 속성을 가지지 않는다.', () => {
    render(<Link />);
    const link = screen.getByTestId('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });
  
  test('컴포넌트가 래핑하는 자식 요소를 렌더링 한다', () => {
    render(
      <Link>
        <SVGLogo title="뱅크사인" />
      </Link>
    );

    // const Link = screen.getByTestId('Link');
    // expect(Link).toHaveAccessibleName('뱅크사인');
  });

});