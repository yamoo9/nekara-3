import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { number } from 'prop-types';
import { Spinner, WireframeBox } from 'components';
import { hangleVowels } from 'services';
import { classNames } from 'utils';

export default function Products({ count = 10, ...restProps }) {
  const [vowels, setVowels] = useState(null);
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    hangleVowels.getVowelAll().then((json) => {
      setVowels(json);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>프로덕트 ⌁ {process.env.REACT_APP_TITLE}</title>
      </Helmet>
      <div className={classNames('page')(styles.products)} {...restProps}>
        <h2 tabIndex={0} className={styles.headline}>
          프로덕트
        </h2>
        {!vowels ? (
          <Spinner />
        ) : (
          <WireframeBox className={styles.grid} style={{ height: null }}>
            {vowels.map((vowel) => (
              <WireframeBox key={vowel.id}>
                <Link
                  className={styles.link}
                  to={`/product/${vowel.id}`}
                  state={{
                    previousRoute: `${pathname}${search}${hash}`
                  }}
                >
                  {vowel.letter}
                </Link>
              </WireframeBox>
            ))}
          </WireframeBox>
        )}
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
