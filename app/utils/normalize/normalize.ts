export const normalize = (value: number, a: number, b: number = 0) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return (value - min) / (max - min);
};
