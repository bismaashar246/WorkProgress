import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  gender: '',
  areasOfInterest: [],
  password: '', 
  age: '', 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { username, gender, areasOfInterest, password, age } = action.payload;
      state.username = username;
      state.gender = gender;
      state.areasOfInterest = areasOfInterest;
      state.password = password;
      state.age = age;
    },
  }
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;
