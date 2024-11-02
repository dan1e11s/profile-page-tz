import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  fullName: string;
  email: string;
  gender: string;
  country: string;
  language: string;
  time_zone: string;
}

const initialState: ProfileState = {
  fullName: '',
  email: '',
  gender: '',
  country: '',
  language: '',
  time_zone: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<ProfileState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
