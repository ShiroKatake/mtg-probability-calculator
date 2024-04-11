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
      <label className="col-12 sm:col-7 md:col-4" htmlFor={id}>
        <div>{label}</div>
        <div className="text-xs">{description}</div>
      </label>
      <InputNumber
        className="col-12 sm:col-3 lg:col-2"
        inputClassName="w-full"
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
