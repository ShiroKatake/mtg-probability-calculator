import {getRandomHsb, hsbToHsl} from "./hsbUtils";

describe("hsb utils", () => {
  it("should generate correctly", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    const color = getRandomHsb();
    expect(color).toEqual({h: 0, s: 30, b: 20});
  });
  it("should convert correctly", () => {
    expect(hsbToHsl({h: 0, s: 30, b: 20})).toBe("hsl(0, 30%, 20%)");
  });
});
