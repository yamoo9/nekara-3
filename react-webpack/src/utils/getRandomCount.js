export function getRandomCount(min = 1, max = 100) {
  if (min >= max) throw new Error('min 값이 max 값보다 작아야 합니다.');
  return Math.floor(Math.random() * (max - min) + min);
}
