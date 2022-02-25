import styles from './Settings.module.css';
import { number } from 'prop-types';
import { WireframeBox } from 'components';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export default function SettingList({ itemCount, ...restProps}) {
  return (
    <div className={classNames('settingList')(styles.container)} {...restProps}>
      {
        Array(itemCount).fill(null).map(() => <WireframeBox className={styles.setting} />)
      }
    </div>
  );
}

SettingList.defaultProps = {
  itemCount: 10
}

SettingList.propTypes = {
  itemCount: number
}