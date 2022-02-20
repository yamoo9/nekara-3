export default function delay(time = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, time);
  });
}