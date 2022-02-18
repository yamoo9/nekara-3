import { css } from '@emotion/react';
import { bool, elementType, number, oneOfType, string } from 'prop-types';
import { SVGIcon } from '../svgicon/svgicon';

export function Logo({
  as: Component,
  label,
  size,
  dark,
  homelink,
  ...restProps
}) {
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
    >
      {!homelink ? icon : <a href="/">{icon}</a>}
    </Component>
  );
}

Logo.defaultProps = {
  as: 'h1',
  label: '🔻',
  size: 24,
  dark: false,
  homelink: false,
};

Logo.propTypes = {
  /** 렌더링 할 요소 타입 */
  as: oneOfType([string, elementType]),
  /** 로고 레이블 */
  label: string,
  /** 로고 크기 */
  size: oneOfType([number, string]),
  /** 다크 모드 */
  dark: bool,
  /** 홈링크 모드 */
  homelink: bool,
};
