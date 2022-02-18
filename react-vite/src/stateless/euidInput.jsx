import { forwardRef } from 'react';
import { string, func, object } from 'prop-types';
import styles from './euidInput.module.css';

function PureEuidInput({
  id,
  label,
  type,
  value,
  onChange,
  inputProps,
  ...restProps
}, ref) {
  return (
    <div className={styles.formControl} {...restProps}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        className={styles.input}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        readOnly={!onChange}
        {...inputProps}
      />
    </div>
  );
}

PureEuidInput.defaultProps = {
  type: 'text',
};

PureEuidInput.propTypes = {
  type: string,
  id: string.isRequired,
  label: string.isRequired,
  value: string,
  onChange: func,
  inputProps: object,
};

// React 컴포넌트 → React.forwardRef(컴포넌트) : ref 전달 → 고차 컴포넌트 반환
export const EuidInput = forwardRef(PureEuidInput);