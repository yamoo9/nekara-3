import { create } from '@storybook/theming';

/**
 * 테마 구성
 */
const theme = {
  light: {
    primary: '#fed969',
    secondary: '#699afe',
    app: {
      // 앱 배경 색상
      bg: '#f4f4f4',
      // 앱, 애드온 배경 색상
      contentBg: '#fdfdfd',
      // 앱, 툴바, 애드온 패널 테두리 색상
      borderColor: '#efefef',
      // 앱 둥근 테두리 설정
      borderRadius: 6,
    },
    bar: {
      // 애드온 패널 글자 색상
      textColor: '#808080',
      // 애드온 패널 선택된 글자 색상
      selectedColor: '#699afe',
      // 툴바, 애드온 패널 배경 색상
      bg: '#fff',
    },
    text: {
      // 텍스트 색상
      color: '#2b2d32',
      inverseColor: '#250808',
    },
    input: {
      bg: '#fff',
      border: '#eaeaea',
      textColor: '#2b2d32',
      borderRadius: 4,
    },
  },

  dark: {
    primary: '#fed969',
    secondary: '#457ae3',
    app: {
      // 앱 배경 색상
      bg: '#111',
      // 앱, 애드온 배경 색상
      contentBg: '#242424',
      // 앱, 툴바, 애드온 패널 테두리 색상
      borderColor: '#484848',
      // 앱 둥근 테두리 설정
      borderRadius: 6,
    },
    bar: {
      // 애드온 패널 글자 색상
      textColor: '#e4e5eb',
      // 애드온 패널 선택된 글자 색상
      selectedColor: '#98bbff',
      // 툴바, 애드온 패널 배경 색상
      bg: '#28292b',
    },
    text: {
      // 텍스트 색상
      color: '#ecedf0',
      inverseColor: '#4a4c51',
    },
    input: {
      bg: '#1c1c1c',
      border: '#4b4b4b',
      textColor: '#ababab',
      borderRadius: 4,
    },
  },
};

/**
 * 테마 생성 함수
 */
function createTheme(mode) {
  return create({
    base: mode,
    brandTitle: '이듬 Storybook',
    brandUrl: 'https://euid.dev',
    brandImage: '/assets/euid-logo.svg',
  
    // 타이포그래피
    fontBase: `"Spoqa Han Sans Neo", sans-serif`,
    fontCode: 'monospace',
  
    // 컬러
    colorPrimary: theme[mode].primary,
    colorSecondary: theme[mode].secondary,
  
    // 인터페이스
    appBg: theme[mode].app.bg,
    appContentBg: theme[mode].app.contentBg,
    appBorderColor: theme[mode].app.borderColor,
    appBorderRadius: theme[mode].app.borderRadius,
  
    // 툴바 기본, 활성 색상
    barTextColor: theme[mode].bar.textColor,
    barSelectedColor: theme[mode].bar.selectedColor,
    barBg: theme[mode].bar.bg,
  
    // 텍스트 컬러
    textColor: theme[mode].text.color,
    textInverseColor: theme[mode].text.inverseColor,
  
    // 폼 인풋 컬러
    inputBg: theme[mode].input.bg,
    inputBorder: theme[mode].input.border,
    inputTextColor: theme[mode].input.textColor,
    inputBorderRadius: theme[mode].input.borderRadius,
  });
}

/**
 * 라이트 테마
 */

export default {
  light: createTheme('light'),
  dark: createTheme('dark'),
};
