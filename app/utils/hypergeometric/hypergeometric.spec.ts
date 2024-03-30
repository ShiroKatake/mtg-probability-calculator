import { hypergeometric } from './hypergeometric';

describe('Hypergeometric distribution calculator', () => {
  it('should return the expected probability', () => {
    // Resulted cross checked at https://aetherhub.com/Apps/HyperGeometric
    expect(hypergeometric(60, 7, 4, 1)).toBe(0.336);
  });
  it('should return the expected probability', () => {
    // Resulted cross checked at https://aetherhub.com/Apps/HyperGeometric
    expect(hypergeometric(99, 7, 10, 1)).toBe(0.537);
  });
});
