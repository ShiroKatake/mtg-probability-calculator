/**
 * Generates human readable string from range of numbers.
 * @param min lower bound of the range
 * @param max upper bound of the range
 * @returns "min to max" or just one value if both are the same
 */
export const rangeText = (min: number, max: number) => {
  if (min === max) {
    return `${min}`;
  }
  if (max < min) {
    return `${max} to ${min}`;
  }
  return `${min} to ${max}`;
};
