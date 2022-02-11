import styled from 'styled-components';

// 스타일링을 목적으로 하는 React 컴포넌트 생성
export const A11yHidden = styled.a`
  overflow: hidden;
  position: absolute;
  clip: rect(0,0,0,0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;

// with* → React Higher-Order Component
// https://styled-components.com/docs/api#withcomponent
export const A11yHiddenByH2 = A11yHidden.withComponent('h2');