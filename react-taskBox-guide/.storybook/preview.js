import React, { StrictMode } from 'react';
import ko from 'axe-core/locales/ko.json';
import { GlobalStyle } from '@/styles/GlobalStyle';

export const decorators = [
  (Story) => (
    <StrictMode>
      <GlobalStyle />
      <Story />
    </StrictMode>
  ),
];

export const parameters = {
  a11y: {
    config: {
      locale: ko,
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
