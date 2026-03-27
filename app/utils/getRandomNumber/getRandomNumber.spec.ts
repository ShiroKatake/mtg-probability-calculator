import {getRandomNumber} from "./getRandomNumber";

describe("random number generator", () => {
  it("When Math.random() returns minimum, returns smallest value", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    expect(getRandomNumber(10, 20)).toBe(10);
  });

  it("When Math.random() returns maximum, returns biggest value", () => {
    jest.spyOn(Math, "random").mockReturnValue(1);
    expect(getRandomNumber(10, 20)).toBe(20);
  });

  it("When Math.random() returns in between, returns in between value", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.8);
    expect(getRandomNumber(10, 20)).toBe(18);
  });

  it("When Math.random() returns big fraction, rounds up to nearest decimal", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.64);
    expect(getRandomNumber(10, 20)).toBe(17);
  });

  it("When getRandomNumber is called with only 1 param, assumes 0 is min", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    expect(getRandomNumber(13)).toBe(0);
  });
});
