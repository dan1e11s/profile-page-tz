import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { RootState } from '@/store/store';
import { updateProfile } from '@/store/profileSlice';

import Avatar from '@components/Avatar';
import Button from '@components/ui/Button';
import FormInputs from '@components/FormInputs';
import FormSelect from '@components/FormSelect';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  const [formData, setFormData] = useState(profile);
  const [errors, setErrors] = useState<{
    fullName: string;
    email: string;
    language: string;
  }>({ fullName: '', email: '', language: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = { fullName: '', email: '', language: '' };
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.language) newErrors.language = 'Language is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    }

    dispatch(updateProfile(formData));
  };

  return (
    <div className="w-[100%] max-w-[1282px] rounded-10px shadow-md my-[150px] 768px:px-10">
      <div className="h-[100px] bg-gradient-to-r from-[#B8D2F3] to-[#FDF7E1] rounded-tl-10px rounded-tr-10px"></div>
      <div className="p-8 flex justify-between items-center 535px:flex-col 535px:gap-10">
        <Avatar />
        <Button variant="primary" size="medium" onClick={handleSubmit}>
          Save
        </Button>
      </div>
      <div className="px-8 pb-[280px]">
        <FormInputs
          formData={formData}
          onChange={handleChange}
          errors={errors}
        />
        <FormSelect
          formData={formData}
          onChange={handleChange}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
