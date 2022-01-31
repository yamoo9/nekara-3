import { render, screen } from '@testing-library/react';
import RandomCounter from './randomCounter';

describe('RandomCounter', () => {
  test('output 노드 값의 초깃값 0', () => {
    render(<RandomCounter />);
    const output = screen.getByTestId('output');
    expect(output.value).toBe('0');
  });
});
