// React Stateless Component
// 상태를 가지지 않는 컴포넌트 → 표현(UI 렌더링)
// 함수 컴포넌트 (props) => ReactNode[]

import { getPublicAsset } from 'utils';
import { ReactComponent as BankSign } from 'assets/banksign.svg';
// import banksignImageURL from 'assets/banksign.svg';


// SVG 파일을 HTML 웹 문서에서 활용하는 방법 1. link (url)
// <img /> etc.
export default function Logo({ title }) {
  return (
    <img
      src={getPublicAsset('banksign.svg')}
      title={title}
      alt={title}
    />
  );
}

Logo.defaultProps = {
  title: '뱅크사인',
};


// SVG 파일을 HTML 웹 문서에서 활용하는 방법 2. embed
  // <svg></svg>
  export function SVGLogo({ title }) {
    // webpack에 의해 동적으로 생성된 이미지 경로
    // console.log(banksignImageURL); 
    return <BankSign data-testid="logo" title={title} />;
  }
  
  SVGLogo.defaultProps = {
    title: '뱅크사인'
  };