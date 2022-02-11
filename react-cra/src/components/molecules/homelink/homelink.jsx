import { Link, SVGLogo } from 'components';

export default function HomeLink({ label, ...props }) {
  return (
    <Link {...props} data-testid="homelink">
      <SVGLogo title={label} />
    </Link>
  );
}
