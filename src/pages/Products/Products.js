import styles from './Products.module.css';
import { Helmet } from 'react-helmet-async'
import { number } from 'prop-types';
import { WireframeBox } from 'components';
import { classNames } from 'utils';

export default function Products({ count = 10, ...restProps }) {
  return (
    <>
      <Helmet>
        <title>프로덕트 ← {process.env.REACT_APP_TITLE}</title>
      </Helmet>

      <div className={classNames('page')(styles.products)} {...restProps}>
        <h2 tabIndex={0} className={styles.headline}>
          프로덕트
        </h2>
        <WireframeBox className={styles.grid} style={{ height: null }}>
          {Array(count)
            .fill(null)
            .map((_t, i) => (
              <WireframeBox key={i} />
            ))}
        </WireframeBox>
      </div>
    </>
  );
}

Products.defaultProps = {
  count: 10,
};

Products.propTypes = {
  count: number,
};
