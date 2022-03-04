import styles from './Profile.module.css';
import { useState } from 'react';
import { string } from 'prop-types';
import { Dialog, WireframeBox } from 'components';
import { useCallbackPrompt } from 'hooks';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export default function Profile({ profileName, ...restProps }) {
  const [name, setName] = useState(profileName);

  const handleChange = (e) => {
    setName(e.target.value);
    setShowDialog(true);
  };

  const [showDialog, setShowDialog] = useState(false);
  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(showDialog);

  return (
    <div className={classNames('profile')(styles.container)} {...restProps}>
      {showDialog && (
        <Dialog
          showDialog={showPrompt}
          confirmNavigation={confirmNavigation}
          cancelNavigation={cancelNavigation}
        />
      )}
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
              setShowDialog(false);
            }}
          >
            저장
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => {
              console.log('입력 내용 작성이 취소 됨');
              setShowDialog(false);
              setName(profileName);
            }}
          >
            취소
          </button>
        </div>
      </WireframeBox>
    </div>
  );
}

Profile.defaultProps = {
  profileName: '야무',
};

Profile.propTypes = {
  profileName: string,
};
