import { round } from './round';
describe('Rounding function', () => {
  it('should round down from 4', () => {
    expect(round(0.2734, 3)).toBe(0.273);
  });
  it('should round up from 5', () => {
    expect(round(0.2735, 3)).toBe(0.274);
  });
});
