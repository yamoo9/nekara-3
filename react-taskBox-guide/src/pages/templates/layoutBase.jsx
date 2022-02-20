import { css } from '@emotion/react';
import { theme } from '@/styles/theme';
import { Header } from '@/components';

/* -------------------------------------------------------------------------- */

export const LayoutBase = ({ children, ...restProps }) => (
  <div
    css={css`
      background: ${theme.colors.Primary[50]};
      min-height: 100vh;
    `}
    {...restProps}
  >
    <Header
      css={css`
        position: sticky;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
      `}
    />
    {children}
  </div>
);
