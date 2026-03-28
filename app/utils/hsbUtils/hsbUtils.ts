import {ColorPickerHSBType} from "primereact/colorpicker";
import {normalize} from "@utils";

// NOTE: This random color generator avoids green
// because the default usage already had green
// It also only generate colors with
// brightness 50% and saturation 30%

export const getRandomHsb = (): ColorPickerHSBType => {
  const green_hMin = 60;
  const green_hMax = 180;
  const hMax = 360;
  const hNoGreen = hMax - (green_hMax - green_hMin);

  const rand = Math.random();
  const h =
    normalize(rand, hNoGreen) < green_hMin
      ? normalize(rand, hNoGreen)
      : normalize(rand - 0.25, green_hMax, hMax);
  const s = 50;
  const b = 30;
  return {h, s, b};
};

export const hsbToHsl = (color: ColorPickerHSBType): string => {
  // hsl stands for Hue, Saturation, and Lightness, and CSS uses this
  // hsb stands for Hue, Saturation, and Brightness, and primereact uses this
  // Both are the exact same, people just wanna be different . . .
  return `hsl(${color.h}, ${color.s}%, ${color.b}%)`;
};
