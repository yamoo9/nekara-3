import * as React from 'react';

const defaultTheme = {
  light: {
    background: '#fefefe',
    forground: '#191919',
    accent: '#0bb7b1',
    lineHeight: 1.5,
  },
  dark: {
    background: '#131313',
    forground: '#f9f8f9',
    accent: '#e6790c',
    lineHeight: 2,
  }
}

// 테마 컨텍스트 생성하기 (테마: 읽기 전용)
// 테마 컨텍스트 값을 생성 과정에 공급하기
const ThemeContext = React.createContext(defaultTheme);

// 테마 컨텍스트 값을 반환하는 커스텀 훅 만들어 내보내기
export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  if (!theme) {
    throw new Error('ThemeContext 내부에서 useTheme을 호출해야 합니다.');
  }
  // "테마 값은 런타임(실행) 중에 변경되지 않는 값이므로 그 값을 기억해두는 것이 좋다."
  return React.useMemo(() => theme, [theme]);
}