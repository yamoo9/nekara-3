import styles from './Spinner.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { string, number, oneOfType, exact } from 'prop-types';

export const Spinner = ({
  fill,
  stroke,
  strokeWidth,
  size,
  opacity,
  title,
  messages,
  ...restProps
}) => {
  
  useEffect(() => {
    const loadingStartNode = document.getElementById('loading-start');
    loadingStartNode.setAttribute('role', 'alert');
    loadingStartNode.insertAdjacentHTML(
      'beforeend',
      `
      <span className="a11yHidden">로딩 시작</span>
    `
    );

    return () => {
      loadingStartNode.removeAttribute('role');
      loadingStartNode.innerHTML = '';
      const loadingEndNode = document.getElementById('loading-end');
      loadingEndNode.insertAdjacentHTML(
        'beforeend',
        `
        <span className="a11yHidden">로딩 종료</span>
      `
      );
      setTimeout(() => (loadingEndNode.innerHTML = ''), 1000);
    };
  }, []);

  return createPortal(
    <svg
      width={size}
      height={size}
      className={styles.container}
      style={{
        opacity: opacity > 1 ? 1 : opacity < 0 ? 0 : opacity,
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      {title && <title>{title}</title>}
      <path
        d="M20 25L80 25L80 75L20 75Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.5;0.501;1"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.5;0.5001;1"
          values="1;1;0;0"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="-0.33877551020408164s"
          keyTimes="0;0.5;0.501;1"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="-0.33877551020408164s"
          keyTimes="0;0.5;0.5001;1"
          values="1;1;0;0"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="-0.6734693877551021s"
          keyTimes="0;0.5;0.501;1"
          values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="-0.6734693877551021s"
          keyTimes="0;0.5;0.5001;1"
          values="1;1;0;0"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="-0.6734693877551021s"
          keyTimes="0;0.499;0.5;1"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="-0.6734693877551021s"
          keyTimes="0;0.4999;0.5;1"
          values="0;0;1;1"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="-0.33877551020408164s"
          keyTimes="0;0.499;0.5;1"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="-0.33877551020408164s"
          keyTimes="0;0.4999;0.5;1"
          values="0;0;1;1"
        />
      </path>
      <path
        d="M50 25L80 25L80 75L50 75"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.499;0.5;1"
          values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
        />
        <animate
          attributeName="opacity"
          dur="2.0408163265306123s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.4999;0.5;1"
          values="0;0;1;1"
        />
      </path>
    </svg>,
    document.getElementById('spinner-container')
  );
};

Spinner.defaultProps = {
  fill: '#e5eff0',
  stroke: '#b4bfc0',
  strokeWidth: 2,
  opacity: 1,
  size: 100,
  messages: {
    start: '로딩이 시작되었습니다.',
    end: '로딩이 종료되었습니다.',
  },
};

Spinner.propTypes = {
  fill: string,
  stroke: string,
  strokeWidth: number,
  size: oneOfType([number, string]),
  opacity: number,
  title: string,
  message: exact({
    start: string,
    end: string,
  }),
};
