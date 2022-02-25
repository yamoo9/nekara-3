import styles from './ProductDetail.module.css';
import { useEffect, useState } from 'react'
import { Helmet } from "react-helmet-async";
import { setDocumentTitle } from 'utils'
import { A11yHidden, Spinner, WireframeBox } from 'components';
import { classNames } from 'utils';
import { hangleVowels } from 'services';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgBackLink } from 'assets/arrowLeft.svg';


export default function ProductDetail(props) {
  
  const [vowel, setVowel] = useState(null);

  const id = 10;

  useEffect(() => {
    hangleVowels.getVowel(id).then((response) => {
      setVowel(response);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle(`프로덕트 ${id}`)}</title>
      </Helmet>
      <div className={classNames('page')(styles.container)} {...props}>
        {!vowel ? (
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
  )
}