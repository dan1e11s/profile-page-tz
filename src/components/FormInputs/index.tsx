import Input from '@components/ui/Input';

interface FormInputsProps {
  formData: {
    fullName: string;
    email: string;
    gender: string;
    country: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: {
    fullName: string;
    email: string;
    language: string;
  };
}

const FormInputs: React.FC<FormInputsProps> = ({
  formData,
  onChange,
  errors,
}) => {
  return (
    <div className="mb-3">
      <div className="flex gap-8 768px:flex-col">
        <Input
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          placeholder="Your Full Name"
          label="Full Name"
          error={errors.fullName}
        />
        <Input
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Your Email"
          label="Email"
          error={errors.email}
        />
      </div>
    </div>
  );
};

export default FormInputs;
