import Select from '@components/ui/Select';

interface FormSelectProps {
  formData: {
    fullName: string;
    email: string;
    gender: string;
    country: string;
    language: string;
    time_zone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  errors: {
    fullName: string;
    email: string;
    language: string;
  };
}

const FormSelect: React.FC<FormSelectProps> = ({
  formData,
  onChange,
  errors,
}) => {
  return (
    <div>
      <div className="flex gap-8 mb-3 768px:flex-col">
        <Select
          name="language"
          onChange={onChange}
          options={[
            { value: 'english', label: 'English' },
            { value: 'russian', label: 'Russian' },
          ]}
          value={formData.language}
          placeholder="Your Language"
          label="Language"
          error={errors.language}
        />
        <Select
          name="country"
          onChange={onChange}
          options={[
            { value: 'usa', label: 'USA' },
            { value: 'canada', label: 'Canada' },
          ]}
          value={formData.country}
          placeholder="Your Country"
          label="Country"
        />
      </div>
      <div className="flex gap-8 768px:flex-col">
        <Select
          name="gender"
          onChange={onChange}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          value={formData.gender}
          placeholder="Your Gender"
          label="Gender"
        />
        <Select
          name="time_zone"
          onChange={onChange}
          options={[
            { value: 'gmt +3', label: 'GMT +3' },
            { value: 'gmt +6', label: 'GMT +6' },
          ]}
          value={formData.time_zone}
          placeholder="Your Time Zone"
          label="Time Zone"
        />
      </div>
    </div>
  );
};

export default FormSelect;
