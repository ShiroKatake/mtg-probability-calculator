export const geometric = (successChance: number, attemptCount: number) => {
  const failChance = 1 - successChance;
  const expectedValue = 1 / successChance;
  const standardDeviation = Math.sqrt(failChance / successChance ^ 2);

  const minAttemptCount = Math.max(expectedValue - standardDeviation, 1);
  const maxAttemptCount = expectedValue + standardDeviation;

  const probability = Math.pow(failChance, attemptCount - 1) * successChance;

  return {
    expectedValue,
    standardDeviation,
    probability
  };
};
