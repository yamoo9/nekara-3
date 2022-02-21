import * as React from 'react'
import { css } from '@emotion/react';
import { componentStyle, Face, Name } from './avatar.styled';
import { theme } from '@/styles/theme';
import { AvatarProps } from '@/types';

/* -------------------------------------------------------------------------- */

const defaultProps = {
  as: 'figure',
  loading: true,
  $size: 24,
  alt: '',
};

export function Avatar({
  as: Component,
  loading,
  src,
  alt,
  name,
  $size,
  ...restProps
}: AvatarProps): JSX.Element | null {
  
  if (!Component) {
    return null;
  }

  return (
    <Component css={componentStyle} {...restProps}>
      {loading ? (
        <>
          <span
            css={css`
              width: 24px;
              height: 24px;
              background: ${theme.colors.Primary[50]};
              border-radius: 50%;
            `}
          />
          <span
            css={css`
              width: 47px;
              height: 14px;
              background: ${theme.colors.Primary[50]};
            `}
          />
        </>
      ) : (
        <>
          <Face src={src} alt={alt} $size={$size} />
          {name && <Name>{name}</Name>}
        </>
      )}
    </Component>
  );
}

Avatar.defaultProps = defaultProps;
