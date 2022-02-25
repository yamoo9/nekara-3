import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './PageNotFound.module.css';

export default function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/page-not-found');
  }, [navigate]);

  return (
    <div role="alert" className={styles.warnning}>
      <img src="/assets/404-page-not-found.gif" alt="" />
      <h2>페이지 경로가 잘못되었습니다.</h2>
      <p>
        경로가 올바른지 확인 후 다시 시도해보세요.
        <br/>
        <Link to="/">홈페이지</Link>로 이동하시겠습니까?
      </p>
    </div>
  );
}
