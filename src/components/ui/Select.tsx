type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  name: string;
  label?: string;
  options: Option[];
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
};

const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  error,
  placeholder = 'Please select an option',
}) => {
  return (
    <div className="mb-4 w-full">
      {label && <label className="block mb-3">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-[#f9f9f9] rounded-8px p-2 focus:outline-none ${
          !value ? 'text-gray-400' : 'text-gray-900'
        }`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Select;
