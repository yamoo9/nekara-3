import styles from './ProductDetail.module.css';
import { ReactComponent as SvgBackLink } from 'assets/arrowLeft.svg';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, useLocation } from 'react-router-dom';
import { A11yHidden, WireframeBox, Spinner } from 'components';
import { hangleVowels } from 'services';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export default function ProductDetail(props) {
  
  const params = useParams();
  const location = useLocation();

  const [vowel, setVowel] = useState('');

  useEffect(() => {
    hangleVowels.getVowel(params.id).then((data) => setVowel(data));
  }, [params.id]);

  return (
    <>
      <Helmet>
        <title>{`${vowel?.letter ?? '로딩 중...'} ⌁ ${
          process.env.REACT_APP_TITLE
        }`}</title>
      </Helmet>
      <div className={classNames('page')(styles.container)} {...props}>
        {!vowel ? (
          <Spinner />
        ) : (
          <div className={styles.wrapper}>
            <WireframeBox className={styles.grid} style={{ height: null }}>
              <table className={styles.table}>
                <A11yHidden as="caption">
                  한글 자음 ${vowel.letter} 풀이
                </A11yHidden>
                <tbody>
                  <tr>
                    <th scole="row">이름</th>
                    <td>{vowel.name}</td>
                  </tr>
                  <tr>
                    <th scole="row">모양</th>
                    <td>{vowel.shape}</td>
                  </tr>
                  <tr>
                    <th scole="row">소리</th>
                    <td>{vowel.sounds}</td>
                  </tr>
                </tbody>
              </table>
            </WireframeBox>
            <Link to={location?.state?.previousRoute ?? '/products'} aria-label="뒤로 가기">
              <SvgBackLink className={styles.backLink} />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
