import { combination } from "../combination/combination";

/**
 * Calculates the probability of x successes in n draws from a population of size N,
 * using the Hypergeometric distribution.
 *
 * @param N Size of the population
 * @param n Number of samples drawn from the population
 * @param K Number of successes in sample
 * @param k Number of successes in sample drawn
 * @returns The probability of x successes in n draws from a population of size N
 */

export const hypergeometric = (N: number, n: number, K: number, k: number) => {
  return combination(K, k) * combination(N - K, n - k) / combination(N, n);
};

export const hypergeometricKOrMore = (N: number, n: number, K: number, k: number) => {
  let probability = 0;
  for (let i = 0; i < k; i++) {
    probability += hypergeometric(N, n, K, i);
  }
  probability = 1 - probability;
  return probability;
};

export const dropMiss = (K: number, N: number = 99, n: number = 7) => {
  let probability = 1;
  let turn = 0;
  while (probability >= 0.5) {
    turn++;
    probability = hypergeometricKOrMore(N, n + turn, K, turn);
  }
  return turn;
};
