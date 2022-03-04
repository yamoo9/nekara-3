import styles from './Settings.module.css';
import { WireframeBox } from 'components';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export default function Settings() {

  return (
    <div className={classNames('settings')(styles.container)}>
      <WireframeBox className={styles.setting} />
      <WireframeBox className={styles.setting} />
    </div>
  );
}