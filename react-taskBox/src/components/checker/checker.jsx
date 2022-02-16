
import { string, number, bool, func, oneOfType } from 'prop-types';
import { Wrapper } from './checker.styled';

export const Checker = ({ label, checked, loading, size, onChange, ...restProps }) => {

  // transient prop -> $prop
  // dont render actual dom
  return (
    <Wrapper $size={size} checked={checked} $loading={loading.toString()}>
      <input
        type="checkbox"
        aria-label={label}
        checked={checked}
        onChange={onChange}
        {...restProps}
      />
    </Wrapper>
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