import { css } from '@emotion/react';
import { theme } from '@/styles/theme';
import { Header } from '@/components';
import { LayoutBaseProps } from '@/types';

/* -------------------------------------------------------------------------- */

export const LayoutBase = ({
  headerProps,
  children,
  ...restProps
}: LayoutBaseProps) => (
  <div
    css={css`
      background: ${theme.colors.Primary[50]};
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
      {...headerProps}
    />
    {children}
  </div>
);