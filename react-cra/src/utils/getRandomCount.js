// (min: number, max: number) => number
export function getRandomCount(min = 10, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}