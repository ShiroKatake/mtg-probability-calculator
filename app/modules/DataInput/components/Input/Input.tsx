import { InputNumber } from "primereact/inputnumber";

interface InputProps {
  label: string;
  description: string;
  id: string;
  name: string;
  value: number | null;
  setValue: (value: any) => void;
}

export const Input: React.FC<InputProps> = ({ label, description, id, name, value, setValue }) => {
  return (
    <div className="grid">
      <div className="col-12 sm:col-7 md:col-8">
        <label htmlFor={id}>{label}</label>
        <small id={`${label}-${id}`} className="block text-xs">
          {description}
        </small>
      </div>
      <InputNumber
        className="col-12 sm:col-3 lg:col-3"
        inputClassName="w-full"
        aria-describedby={`${label}-${id}`}
        id={id}
        name={name}
        value={value}
        onValueChange={(e) => setValue(e.value ?? null)}
        useGrouping={false}
        showButtons
      />
    </div>
  );
};
