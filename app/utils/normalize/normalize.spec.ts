import {normalize} from "./normalize";

describe("normalize tests", () => {
  it("scale a normalized value between a decimal between 10 and 20", () => {
    expect(normalize(18, 10, 20)).toBe(0.8);
  });
  it("normalize can automatically figure out min and max", () => {
    expect(normalize(18, 20, 10)).toBe(0.8);
  });
  it("normalize can be used with 2 params", () => {
    expect(normalize(8, 10)).toBe(0.8);
  });
});
