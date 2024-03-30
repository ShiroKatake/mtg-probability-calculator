import { combination } from './combination';

describe('combination calculator', () => {
  // Calculate number of ways to select 15 cards in 2 slots
  it('15C2 should return 105', () => {
    expect(combination(15, 2)).toBe(105);
  });

  // Calculate number of ways to select 10 cards in 1 slot
  it('10C1 should return 45', () => {
    expect(combination(10, 1)).toBe(10);
  });

  // Calculate number of ways to select 60 cards in 7 slots
  it('60C7 should return 386206920', () => {
    expect(combination(60, 7)).toBe(386206920);
  });

  // Calculate number of ways to select 99 cards in 7 slots
  it('99C7 should return 14887031544', () => {
    expect(combination(99, 7)).toBe(14887031544);
  });
});
