import styles from './Settings.module.css';
import { useState } from 'react'
import { number } from 'prop-types';
import { WireframeBox } from 'components';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export default function SettingList({ itemCount, ...restProps}) {

  let [list] = useState(() => {
  
    return Array(itemCount)
      .fill(null)
      .map((_, index) => {
        let isActive = Math.random() > 0.5;
        let backgroundColor = isActive ? '#ffd5a2' : '#f0f0f0';

        return {
          id: `item-${index}`,
          isActive,
          backgroundColor,
        };
      });

  });

  return (
    <div className={classNames('settingList')(styles.container)} {...restProps}>
      {list.map(({ id, isActive, backgroundColor }) => (
        <WireframeBox
          key={id}
          className={styles.setting}
          style={{ backgroundColor }}
        >
          <span style={{fontWeight: 700, fontSize: 20}}>{isActive ? '활성' : '비활성'}</span>
        </WireframeBox>
      ))}
    </div>
  );
}

SettingList.defaultProps = {
  itemCount: 10
}

SettingList.propTypes = {
  itemCount: number
}