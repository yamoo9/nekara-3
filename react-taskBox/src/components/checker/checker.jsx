
import React from 'react';
import styled from '@emotion/styled';
import { string, bool } from 'prop-types';

import checked from './assets/checked.svg';
import unchecked from './assets/unchecked.svg';
import loading from './assets/loading.svg';

console.log({
  checked, unchecked, loading
})


export const PureChecker = ({ id, checked, loading, ...restProps }) => {
  return (
    <input
      id={id}
      name={id}
      type="checkbox"
      checked={checked}
      {...restProps}
    />
  );
};

// prop 기본값 설정
PureChecker.defaultProps = {
  checked: false,
  loading: false,
};

// prop 타입 검사
PureChecker.propTypes = {
  /** Checker 컴포넌트의 ID */
  id: string.isRequired,
  /** Checker 컴포넌트의 체크 상태 */
  checked: bool,
  /** Checker 컴포넌트의 로딩 상태 */
  loading: bool,
};

export const Checker = styled(PureChecker)(props => {
  return {
    
  }
})