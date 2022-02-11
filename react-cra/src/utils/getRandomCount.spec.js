import { getRandomCount } from './getRandomCount';

test('getRandomCount(30)은 30보다 크거나 같은 숫자가 반환된다.', () => {
  expect(getRandomCount(30)).toBeGreaterThanOrEqual(30);
});

test('getRandomCount(30, 45)은 46보다 작은 숫자가 반환된다.', () => {
  expect(getRandomCount(30, 45)).toBeLessThan(46);
});