import { InputNumberProps } from "primereact/inputnumber";

interface InputProps extends InputNumberProps {
  labelClassName?: string;
  label: string;
  description: React.ReactNode;
}

export const InputWrapper: React.FC<InputProps> = ({
  labelClassName,
  label,
  description,
  id,
  children,
}) => {
  return (
    <div className="grid">
      <div className={labelClassName || "col-12 md:col-6"}>
        <label htmlFor={id}>{label}</label>
        <small className="block text-xs">{description}</small>
      </div>
      <div className="col-12 md:col-6">{children}</div>
    </div>
  );
};
