export default function getRandomCount(min = 0, max = 100): number {
  return Math.floor(Math.random() * (max - min) + min);
}
