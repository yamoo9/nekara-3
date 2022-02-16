import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import _loading from '@/assets/svgs/checker-loading.svg';
import _unchecked from '@/assets/svgs/checker-unchecked.svg';
import _checked from '@/assets/svgs/checker-checked.svg';

const { colors } = theme;


// styled-components API 유사한 문법 사용
export const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  background: ${colors.white};
  border-radius: ${({$size}) => `${$size * 0.7}%`};

  ${
    ({ $size }) => {
      let value = typeof $size === 'number' ? `${$size}px` : $size;
      return {
        width: value,
        height: value
      }
    }
  }

  :focus-within {
    outline: 3px solid ${colors.accent['200']};
    border-radius: 6px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background: url(${({ $loading, checked }) => {

      let bgSource = _unchecked;
      if (checked) bgSource = _checked;
      if ($loading === 'true') bgSource = _loading;
      return bgSource;

    }}) no-repeat center center / cover;
  }

  & input {
    cursor: pointer;
    opacity: 0;
    position: relative;
    z-index: 10;
    margin: 0;
    width: inherit;
    height: inherit;
  }
`;