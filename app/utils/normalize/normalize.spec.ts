import {normalize} from "./normalize";

describe("normalize calculator", () => {
  it("normalize a decimal between 10 and 20", () => {
    expect(normalize(0.8, 10, 20)).toBe(18);
  });
  it("normalize can automatically figure out min and max", () => {
    expect(normalize(0.8, 20, 10)).toBe(18);
  });
  it("normalize can be used with 2 params", () => {
    expect(normalize(0.8, 10)).toBe(8);
  });
});
