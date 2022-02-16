
import React from 'react';
import styled from '@emotion/styled';
import { string, bool, func } from 'prop-types';

import checked from './assets/checked.svg';
import unchecked from './assets/unchecked.svg';
import loading from './assets/loading.svg';


export const PureChecker = ({ label, checked, loading, onChange, ...restProps }) => {

  return (
    <div>
      <input
        type="checkbox"
        aria-label={label}
        checked={checked}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
};

// prop 기본값 설정
PureChecker.defaultProps = {
  checked: false,
  loading: false,
};

// prop 타입 검사
PureChecker.propTypes = {
  /** Checker 컴포넌트의 레이블 */
  label: string.isRequired,
  /** Checker 컴포넌트의 체크 상태 */
  checked: bool,
  /** Checker 컴포넌트의 로딩 상태 */
  loading: bool,
  /** Checker 컴포넌트의 상태 변경 이벤트 핸들러 */
  onChange: func,
};

export const Checker = styled(PureChecker)(props => {
  return {
    
  }
})