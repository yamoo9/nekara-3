import styles from './Dashboard.module.css';
import { WireframeBox } from 'components';
import { classNames, setDocumentTitle } from 'utils';
import { Helmet } from 'react-helmet-async';

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('대시보드')}</title>
      </Helmet>
      <div className={classNames('page')(styles.dashboard)}>
        <h2 tabIndex={0} className={styles.headline}>
          대시보드
        </h2>
        <WireframeBox className={styles.grid} style={{ height: null }}>
          <WireframeBox className={styles.gridItem1} />
          <WireframeBox className={styles.gridItem2} style={{ height: null }}>
            <WireframeBox className={styles.child1} />
            <WireframeBox className={styles.child2} />
          </WireframeBox>
        </WireframeBox>
      </div>
    </>
  );
}
