import styles from './Products.module.css';
import { Spinner, WireframeBox } from 'components';
import { classNames, setDocumentTitle } from 'utils';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useVowels } from 'hooks';


export default function Products(props) {

  const { loading, vowels } = useVowels();

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle(vowels ? '프로덕트' : '로딩 중...')}</title>
      </Helmet>
      <div className={classNames('page')(styles.products)} {...props}>
        <h2 tabIndex={0} className={styles.headline}>
          프로덕트
        </h2>
        {loading ? (
          <Spinner size={150} opacity={0.8} />
        ) : (
          <WireframeBox className={styles.grid} style={{ height: null }}>
            {vowels.map((vowel) => (
              <WireframeBox key={vowel.id}>
                <Link
                  className={styles.link}
                  to={`/product/${vowel.id}`}
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