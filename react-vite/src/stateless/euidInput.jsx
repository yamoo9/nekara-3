import { any, string, func, object, shape } from 'prop-types';
import styles from './euidInput.module.css';

export function EuidInput({
  id,
  label,
  type,
  value,
  onChange,
  inputProps,
  forwardRef,
  ...restProps
}) {
  return (
    <div className={styles.formControl} {...restProps}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        ref={forwardRef}
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

EuidInput.defaultProps = {
  type: 'text',
};

EuidInput.propTypes = {
  type: string,
  id: string.isRequired,
  label: string.isRequired,
  value: string,
  onChange: func,
  inputProps: object,
  forwardRef: shape({
    current: any
  })
};