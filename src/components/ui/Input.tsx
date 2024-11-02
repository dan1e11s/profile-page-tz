type InputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  className,
}) => {
  return (
    <div className="mb-4 w-full">
      {label && <label className="block mb-3">{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-[#f9f9f9] rounded-8px  p-2 focus:outline-none ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
