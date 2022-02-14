import React from 'react';
import { string, bool } from 'prop-types';


export const Checker = ({ id, checked, loading, ...restProps }) => {
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
Checker.defaultProps = {
  checked: false,
  loading: false,
};

// prop 타입 검사
Checker.propTypes = {
  /** Checker 컴포넌트의 ID */
  id: string.isRequired,
  /** Checker 컴포넌트의 체크 상태 */
  checked: bool,
  /** Checker 컴포넌트의 로딩 상태 */
  loading: bool,
};
