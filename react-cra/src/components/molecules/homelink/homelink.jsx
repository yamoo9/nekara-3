import { SVGLogo } from 'components';
import './homelink.css';

export default function HomeLink({
  to /* href */,
  isExterenal /* target, rel */,
  className /* default: `homeLink` */,
  children,
  ...restProps /* 사용자가 설정할 나머지 props */
}) {
  return (
    <a
      href={to}
      className={`homelink ${className?.trim?.()}`.trim()}
      rel={isExterenal ? 'noopener noreferrer' : null}
      target={isExterenal ? '_blank' : null}
      data-testid="homelink"
      {...restProps}
    >
      {children ?? <SVGLogo />}
    </a>
  );
}

let { PUBLIC_URL: publicUrl } = process.env;

HomeLink.defaultProps = {
  to: publicUrl === '' ? '/' : publicUrl,
  isExterenal: false,
  className: '',
};
