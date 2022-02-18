import { string, func } from 'prop-types';
import styles from './euidInput.module.css';

export function EuidInput({ id, label, type, onChange }) {
  return (
    <div className={styles.formControl}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} type={type} onChange={onChange} />
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
  onChange: func
};
