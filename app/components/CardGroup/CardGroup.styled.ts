import styled from "styled-components";
import {Fieldset} from "primereact/fieldset";
import {ColorPickerHSBType} from "primereact/colorpicker";
import {hsbToHsl} from "@utils";

interface StyledFieldSetProps {
  $characterCount: number;
  $color: ColorPickerHSBType;
}

export const StyledButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 0.5rem;
  top: -3.3rem;
  right: 0.5rem;

  .p-colorpicker {
    width: 3rem;

    input {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledFieldset = styled(Fieldset)<StyledFieldSetProps>`
  position: relative;
  background: ${({$color}) => hsbToHsl({h: $color.h, s: $color.s, b: $color.b - 10})};

  .p-colorpicker {
    input {
      background-color: ${({$color}) => hsbToHsl($color)} !important;
    }
  }

  ${StyledButtonsContainer} {
    visibility: hidden;
  }

  &:hover ${StyledButtonsContainer} {
    visibility: visible;
  }

  .editInput {
    width: ${({$characterCount}) => $characterCount + 1}ch;
  }

  legend {
    background: ${({$color}) => hsbToHsl($color)};
  }

  [aria-label="display component"] {
    color: ${({$characterCount}) => ($characterCount == 0 ? "grey" : "inherit")};
    cursor: pointer;
  }
`;
