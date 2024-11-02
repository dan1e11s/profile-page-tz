import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import avatar from '@assets/avatar.png';

const Avatar = () => {
  const { fullName, email } = useSelector((state: RootState) => state.profile);

  return (
    <div className="flex items-center gap-[24px] 535px:flex-col 535px:text-center">
      <img src={avatar} alt="Avatar" />
      <div>
        <h3 className="text-[20px] font-medium">
          {fullName || 'Alexa Rawles'}
        </h3>
        <p className="text-[#818181]">{email || 'alexarawles@gmail.com'}</p>
      </div>
    </div>
  );
};

export default Avatar;
