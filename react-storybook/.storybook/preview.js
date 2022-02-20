import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ko from 'axe-core/locales/ko.json';

import selectedTheme from './theme/themeController'
import '../src/styles/global.css';

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

export const decorators = [
  (story) => <div style={{ padding: '1rem' }}>{story()}</div>,
];

export const parameters = {
  docs: {
    theme: selectedTheme,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen', // fullscreen | padded | centered
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#fff' },
      { name: 'gray', value: '#dedede' },
      { name: 'dark', value: '#000' },
    ],
    grid: {
      cellSize: 10,
      opacity: 0.2,
      cellAmount: 5,
      // 레이아웃 모드가 'fullscreen'인 경우 0, 'padded'인 경우 16
      offsetX: 16,
      offsetY: 16,
    },
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: { locale: ko },
  },
};
