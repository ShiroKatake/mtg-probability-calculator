import { combination } from "../combination/combination";

/**
 * Calculates the probability of x successes in n draws from a population of size N,
 * using the Hypergeometric distribution.
 *
 * @param N Size of the population
 * @param n Number of samples drawn from the population
 * @param k Number of successes in sample
 * @param x Number of successes in sample drawn
 * @returns The probability of x successes in n draws from a population of size N
 */

export const hypergeometric = (N: number, n: number, k: number, x: number) => {
  return combination(k, x) * combination(N - k, n - x) / combination(N, n);
};

export const dropMiss = (initialSuccessesInDeck: number, deckSize: number = 99, initialHandsize: number = 7) => {
  let probability = 0;
  let turn = 0;
  while (probability > 0.5) {
    probability = hypergeometric(deckSize, initialHandsize + turn, initialSuccessesInDeck, turn);
    turn++;
  }
  return turn;
};
