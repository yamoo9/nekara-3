import { css } from '@emotion/react';
import { SVGIcon } from '@/components';
import { LogoProps } from '@/types';

/* -------------------------------------------------------------------------- */

const defaultProps = {
  as: 'h1',
  label: 'Triangle',
  size: 24,
  dark: false,
  homelink: false,
};

export function Logo({
  as: Component,
  label,
  size,
  dark,
  homelink,
  ...restProps
}: LogoProps): JSX.Element {

  const icon = (
    <SVGIcon
      id={`logo-${!dark ? 'light' : 'dark'}`}
      label={label}
      size={size}
    />
  );

  return (
    <Component
      css={css`
        margin: 0;
      `}
      title={label}
    >
      {!homelink ? icon : <a href="/">{icon}</a>}
    </Component>
  );
}

Logo.defaultProps = defaultProps;
