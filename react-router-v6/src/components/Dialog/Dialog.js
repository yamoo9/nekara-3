import styles from './Dialog.module.css';
import { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';


export const Dialog = ({ showDialog, cancelNavigation, confirmNavigation }) => {
  useLayoutEffect(() => {
    const rootNode = document.documentElement;
    rootNode.style.overflow = 'hidden';

    return () => {
      rootNode.removeAttribute('style');
    };
  }, []);

  return createPortal(
    <div className={styles.container} hidden={!showDialog}>
      <div className={styles.dialogContents}>
        <header>
          <h2 className={styles.headline}>경고!</h2>
        </header>
        <div>
          <b>작성 중인 내용이 저장되지 않았습니다.</b>
          <br /> 이대로 페이지를 떠나시겠습니까?
        </div>
        <footer>
          <button type="button" className={styles.button} onClick={confirmNavigation}>
            이동
          </button>
          <button type="button" className={styles.button} onClick={cancelNavigation}>
            취소
          </button>
        </footer>
      </div>
      <div className={styles.dim}></div>
    </div>,
    document.getElementById('dialog')
  );
};
