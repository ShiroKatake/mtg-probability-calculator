export const factorial = (n: number) => {
  if (n === 0 || n === 1) {
    return 1n;
  }

  let result = BigInt(1);
  for (let i = BigInt(1); i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}
