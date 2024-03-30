import { round } from "../round/round";

export const percentage = (number: number) => {
  const result = round(number * 100, 1);
  return `${result}%`;
};
