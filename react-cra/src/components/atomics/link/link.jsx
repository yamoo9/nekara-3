import './link.css';

let { PUBLIC_URL: publicUrl } = process.env;

export default function Link({
  to,
  isExterenal,
  className,
  children,
  ...restProps
}) {
  return (
    <a
      href={to}
      className={`link ${className?.trim?.()}`.trim()}
      rel={isExterenal ? 'noopener noreferrer' : null}
      target={isExterenal ? '_blank' : null}
      data-testid="link"
      {...restProps}
    >
      {children}
    </a>
  );
}

Link.defaultProps = {
  to: publicUrl === '' ? '/' : publicUrl,
  isExterenal: false,
  className: '',
};
