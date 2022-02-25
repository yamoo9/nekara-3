import styles from './Profile.module.css';
import { useState } from 'react';
import { WireframeBox } from 'components';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export default function Profile({ history, staticContext, ...restProps }) {
  const [name, setName] = useState('야무');
  const handleChange = (e) => setName(e.target.value);

  return (
    <div className={classNames('profile')(styles.container)} {...restProps}>
      <WireframeBox className={styles.profile}>
        <div className={styles.formControl}>
          <label htmlFor="userName">이름</label>
          <input
            id="userName"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button
            type="button"
            onClick={() => {
              console.log('입력 내용이 저장 됨');
            }}
          >
            저장
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => history.push('/')}
          >
            취소
          </button>
        </div>
      </WireframeBox>
    </div>
  );
}
