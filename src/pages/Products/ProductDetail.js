import styles from './ProductDetail.module.css';
import { ReactComponent as SvgBackLink } from 'assets/arrowLeft.svg';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { A11yHidden, Spinner, WireframeBox } from 'components';
import { classNames, setDocumentTitle } from 'utils';
import { useVowel } from 'hooks';

export default function ProductDetail(props) {

  const { id } = useParams();
  const { loading, vowel } = useVowel(id);

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle(`${vowel?.letter ?? '로딩 중...'}`)}</title>
      </Helmet>
      <div className={classNames('page')(styles.container)} {...props}>
        {loading ? (
          <Spinner size={150} opacity={0.8} />
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
            <Link to="/products" aria-label="뒤로 가기">
              <SvgBackLink className={styles.backLink} />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
