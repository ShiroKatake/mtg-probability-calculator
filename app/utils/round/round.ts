/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param number The number to round.
 * @param precision The number of decimal places to round to (0 being nearest integer).
 * @returns The rounded number.
 */

export const round = (number: number, precision: number): number => {
  const factor = 10 ** precision;
  return Math.round(number * factor) / factor;
};

