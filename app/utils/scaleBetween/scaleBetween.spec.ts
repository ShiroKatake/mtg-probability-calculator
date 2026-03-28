import {scaleBetween} from "./scaleBetween";

describe("scaleBetween tests", () => {
  it("scale a normalized value between a decimal between 10 and 20", () => {
    expect(scaleBetween(0.8, 10, 20)).toBe(18);
  });
  it("scaleBetween can automatically figure out min and max", () => {
    expect(scaleBetween(0.8, 20, 10)).toBe(18);
  });
  it("scaleBetween can be used with 2 params", () => {
    expect(scaleBetween(0.8, 10)).toBe(8);
  });
});
