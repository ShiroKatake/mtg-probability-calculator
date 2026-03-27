import {ColorPickerHSBType} from "primereact/colorpicker";
import {getRandomNumber} from "../getRandomNumber/getRandomNumber";

// NOTE: This random color generator has been weighted to
// only generate colors that has brightness between 20% and 50%
// and saturation between 30% and 90%

interface GetRandomHsbColorProps {
  minHue?: number;
  maxHue?: number;
  minSaturation?: number;
  maxSaturation?: number;
  minBrightness?: number;
  maxBrightness?: number;
}

export const getRandomHsb = ({
  minHue = 0,
  maxHue = 360,
  minSaturation = 0,
  maxSaturation = 60,
  minBrightness = 0,
  maxBrightness = 30,
}: GetRandomHsbColorProps = {}): ColorPickerHSBType => {
  var h = getRandomNumber(minHue, maxHue);
  var s = getRandomNumber(minSaturation, maxSaturation) + 30;
  var b = getRandomNumber(minBrightness, maxBrightness) + 20;
  return {h, s, b};
};

export const hsbToHsl = (color: ColorPickerHSBType): string => {
  // hsl stands for Hue, Saturation, and Lightness, and CSS uses this
  // hsb stands for Hue, Saturation, and Brightness, and primereact uses this
  // Both are the exact same, people just wanna be different . . .
  return `hsl(${color.h}, ${color.s}%, ${color.b}%)`;
};
