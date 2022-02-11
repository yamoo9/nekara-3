import { render, screen } from '@testing-library/react'
import HomeLink from './homelink';
import { SVGLogo } from 'components'

describe('HomeLink 컴포넌트', () => {
  
  test('컴포넌트는 a 요소로 렌더링 된다.', () => {
    render(<HomeLink />);
    const homelink = screen.getByTestId('homelink');
    expect(homelink).toBeInTheDocument();
  });
  
  test('a 요소의 클래스 이름은 "homelink" 이다.', () => {
    render(<HomeLink />);
    const homelink = screen.getByTestId('homelink');
    expect(homelink).toHaveClass('homelink');
  });
  
  test('a 요소에 사용자가 정의한 클래스를 추가하면 기본 클래스 이름과 병합된다.', () => {
    let customClassName = 'userDefined';
    render(<HomeLink className={customClassName} />);
    const homelink = screen.getByTestId('homelink');
    expect(homelink).toHaveClass(`homelink ${customClassName}`);
  });
  
  test('사용자가 정의한 클래스 이름에 공백이 포함될지라도 클래스 이름은 좌우 공백이 제거된다.', () => {
    let customClassName = '      hasSpaceBetween    ';
    render(<HomeLink className={customClassName} />);
    const homelink = screen.getByTestId('homelink');
    expect(homelink.className).toBe(`homelink ${customClassName.trim()}`);
  });

  test('기본적으로 외부 링크 설정이 아니므로 target, rel 속성을 가지지 않는다.', () => {
    render(<HomeLink />);
    const homelink = screen.getByTestId('homelink');
    expect(homelink).not.toHaveAttribute('target');
    expect(homelink).not.toHaveAttribute('rel');
  });
  
  test('컴포넌트가 래핑하는 자식 요소를 렌더링 한다', () => {
    render(
      <HomeLink>
        <SVGLogo title="뱅크사인" />
      </HomeLink>
    );

    screen.debug();

    // const homelink = screen.getByTestId('homelink');
    // expect(homelink).toHaveTextContent('뱅크사인');
  });

});