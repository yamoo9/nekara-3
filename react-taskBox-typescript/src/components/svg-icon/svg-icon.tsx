import sprites from '@/assets/sprites/symbol/sprites.svg';
import { SVGIconProps } from '@/types';

/* -------------------------------------------------------------------------- */

const defaultProps = {
  width: 24,
  height: 24,
  label: '',
};

export function SVGIcon({
  id,
  label,
  size,
  width,
  height,
  ...restProps
}: SVGIconProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      width={size ?? width}
      height={size ?? height}
      viewBox={`0 0 ${size || width} ${size || height}`}
      {...restProps}
    >
      <use href={`${sprites}#${id}`} />
    </svg>
  );
}

SVGIcon.defaultProps = defaultProps;
