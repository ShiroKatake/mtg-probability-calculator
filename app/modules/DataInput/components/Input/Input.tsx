import { InputNumber } from "primereact/inputnumber";

interface InputProps {
  className?: string;
  labelClassName?: string;
  label: string;
  description: string;
  id: string;
  name: string;
  value: number | null;
  setValue: (value: any) => void;
  children?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  className,
  labelClassName,
  label,
  description,
  id,
  name,
  value,
  setValue,
  children,
}) => {
  return (
    <div className="grid">
      <div className={labelClassName || "col-12 md:col-6"}>
        <label htmlFor={id}>{label}</label>
        <small id={`${label}-${id}`} className="block text-xs">
          {description}
        </small>
      </div>
      <InputNumber
        className={className || "col"}
        inputClassName="w-full"
        aria-describedby={`${label}-${id}`}
        id={id}
        name={name}
        value={value}
        onValueChange={(e) => setValue(e.value ?? null)}
        useGrouping={false}
        showButtons
      />
      {children}
    </div>
  );
};
