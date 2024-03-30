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
    <div className="flex">
      <label className="w-4" htmlFor={id}>
        <div>{label}</div>
        <div className="text-xs">{description}</div>
      </label>
      <InputNumber
        className="w-1"
        inputClassName="w-1"
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
