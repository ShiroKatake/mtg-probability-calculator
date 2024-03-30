export const successiveEvents = (failChance: number, successChance: number, attemptCount: number) => {
  const probability = Math.pow(failChance, attemptCount - 1) * successChance;
};
