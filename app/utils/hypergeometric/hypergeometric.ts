import { combination } from "../combination/combination";
import { round } from "../round/round";

/**
 * Calculates the probability of x successes in n draws from a population of size N,
 * using the Hypergeometric distribution.
 *
 * @param N Deck size
 * @param n Starting hand size
 * @param K Desired cards in deck
 * @param k Desired cards in starting hand
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

export const dropMiss = (N: number, n: number, K: number, x: number) => {
  let probability = 1;
  let draw = 0;
  const probabilityData = [];
  while (probability >= 0.5) {
    draw++;
    probability = hypergeometricKOrMore(N, n + draw, K, draw);
    if (draw >= x) {
      probabilityData.push(round(probability * 100, 2));
    }
  }
  return probabilityData;
};
