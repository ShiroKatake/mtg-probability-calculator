import {Button as PrimeReactButton, ButtonProps} from "primereact/button";

/**
 * Modified PrimeReact Button component. There is no functional difference except `preventDefault()`.
 * This project is a massive form, thus buttons need to have their default form submit behaviour disabled
 */

export const Button = (props: ButtonProps) => {
  return (
    <PrimeReactButton
      {...props}
      onClick={(e) => {
        e.preventDefault();
        props.onClick?.(e);
      }}
    />
  );
};
