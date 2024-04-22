import { rangeText } from './rangeText';

describe('Hypergeometric distribution calculator', () => {
  it('should return first value first', () => {
    expect(rangeText(3, 4)).toBe("3 to 4");
  });
  it('should return just one value', () => {
    expect(rangeText(2, 2)).toBe("2");
  });
  it('should second value first', () => {
    expect(rangeText(5, 1)).toBe("1 to 5");
  });
});
