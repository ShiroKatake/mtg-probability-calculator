import { round } from '../round/round';
import { dropMiss, hypergeometric, hypergeometricKOrMore } from './hypergeometric';

describe('Hypergeometric distribution calculator', () => {
  it('should return the expected probability', () => {
    // Resulted cross checked at https://aetherhub.com/Apps/HyperGeometric
    expect(round(hypergeometric(99, 7, 10, 1), 3)).toBe(0.390);
  });
  it('should return the expected probability', () => {
    // Resulted cross checked at https://aetherhub.com/Apps/HyperGeometric
    expect(round(hypergeometricKOrMore(60, 7, 4, 1), 3)).toBe(0.399);
  });
  it('should return the expected probability', () => {
    // Resulted cross checked at https://mtg.dawnglare.com/?p=lands&decksize=99&landmin=37&landmax=37&carddraw=8&maxturns=15
    expect(round(hypergeometricKOrMore(99, 9, 37, 2), 3)).toBe(0.916);
  });
  it('should return the expected probability', () => {
    expect(dropMiss(37)).toBe(5);
  });
});
