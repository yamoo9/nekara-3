import styles from './Profile.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WireframeBox } from 'components';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export default function Profile(props) {
  
  const navigate = useNavigate();

  const [name, setName] = useState('야무');
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={classNames('profile')(styles.container)} {...props}>
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
            onClick={() => navigate(-1)}
          >
            취소
          </button>
        </div>
      </WireframeBox>
    </div>
  );
}