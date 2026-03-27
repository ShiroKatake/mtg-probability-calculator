export const getRandomNumber = (a: number, b: number = 0) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.ceil(Math.random() * (max - min) + min);
};
