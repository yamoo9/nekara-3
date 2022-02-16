
import React from 'react';
import styled from '@emotion/styled';
import { string, number, bool, func, oneOfType } from 'prop-types';

import { theme } from '@/styles/theme';
import _loading from '@/assets/svgs/checker-loading.svg';
import _unchecked from '@/assets/svgs/checker-unchecked.svg';
import _checked from '@/assets/svgs/checker-checked.svg';


export const Checker = ({ label, checked, loading, size, onChange, ...restProps }) => {

  return (
    <Checker.Wrapper size={size} checked={checked} loading={loading.toString()}>
      <input
        type="checkbox"
        aria-label={label}
        checked={checked}
        onChange={onChange}
        {...restProps}
      />
    </Checker.Wrapper>
  );
};

// prop 기본값 설정
Checker.defaultProps = {
  checked: false,
  loading: false,
  size: 16
};

// prop 타입 검사
Checker.propTypes = {
  /** Checker 컴포넌트의 레이블 */
  label: string.isRequired,
  /** Checker 컴포넌트의 체크 상태 */
  checked: bool,
  /** Checker 컴포넌트의 로딩 상태 */
  loading: bool,
  /** Checker 컴포넌트의 크기 설정 */
  size: oneOfType([string, number]),
  /** Checker 컴포넌트의 상태 변경 이벤트 핸들러 */
  onChange: func,
};

// styled-components API 유사한 문법 사용
Checker.Wrapper = styled.span`
  position: relative;
  display: inline-block;
  background: ${theme.colors.white};
  border-radius: ${({size}) => `${size * 0.7}%`};

  ${
    ({ size }) => {
      let value = typeof size === 'number' ? `${size}px` : size;
      return {
        width: value,
        height: value
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background: url(${({ loading, checked }) => {

      let bgSource = _unchecked;
      if (checked) bgSource = _checked;
      if (loading === 'true') bgSource = _loading;
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