import HomeLink from './homelink';
import { render, screen } from '@testing-library/react'

test('HomeLink 컴포넌트의 기본 링크 값은 "/" 이다.', () => {
  render(<HomeLink />);
  const homelink = screen.getByTestId('homelink');
  expect(homelink).toHaveAttribute('href', '/');
});
