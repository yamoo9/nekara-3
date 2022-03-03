import styles from './Landing.module.css';
import { Helmet } from 'react-helmet-async'
import { classNames, setDocumentTitle } from "utils";
import { WireframeBox } from "components";



export default function Landing() {
  return (
    <>
      <Helmet>
        <title>{setDocumentTitle()}</title>
      </Helmet>
      <div className={classNames('page')(styles.landing)}>
        <h2 tabIndex={0} className={styles.headline}>
          홈
        </h2>
        <WireframeBox className={classNames('child')(styles.grid)}>
          <WireframeBox style={{ height: null }} />
          <WireframeBox
            className={classNames('children')(styles.gridItem)}
            style={{ height: null }}
          />
          <WireframeBox style={{ height: null }} />
        </WireframeBox>
      </div>
    </>
  );
}