import { addons } from '@storybook/addons';
import selectedTheme from './theme/themeController'

// 참고: https://storybook.js.org/docs/react/configure/features-and-behavior
addons.setConfig({

  // Storybook 테마
  theme: selectedTheme,
  
  // Story 컴포넌트를 전체화면으로 표시
  isFullscreen: false,

  // Story 목록을 보여주는 디스플레이 패널
  showNav: true,

  // 애드온 구성을 보여주는 디스플레이 패널
  showPanel: true,

  // 애드온 패널 표시 위치
  panelPosition: 'bottom', // bottom | right

  // 바로가기 단축키 제공
  enableShortcuts: true,

  // 도구 모음 표시/감추기
  isToolshown: true,

  // 애드온 패널을 선택하는 ID
  selectedPanel: undefined, // storybook | actions | panel

  // 모바일에서 기본 활성화 탭 선택
  initialActive: 'canvas', // sidebar | canvas | panel

  // 사이드바 옵션
  sidebar: {
    // 루트 레이블 표시
    showRoots: false,
    // 기본적으로 축소할 루트 노드 ID 세트
    collapsedRoots: ['misc'], // misc | other
  },

  // 애드온 ID를 사용해 도구 모음의 도구 수정
  toolbar: {
    title: { hidden: false, },
    zoom: { hidden: false, },
    eject: { hidden: false, },
    copy: { hidden: false, },
    fullscreen: { hidden: false, },
  },
  
});
