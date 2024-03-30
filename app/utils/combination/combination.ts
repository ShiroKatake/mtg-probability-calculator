import { factorial } from "../factorial/factorial";

/**
 * Calculates the number of ways to select r samples from a population of size n.
 *
 * @param n Size of the population.
 * @param r Number of samples drawn from the population.
 * @returns The number of ways to select r samples from a population of size n.
 */

export const combination = (n: number, r: number): number => {
  let result = factorial(n) / (factorial(r) * factorial(n - r));
  return Number(result);
};
