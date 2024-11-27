import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roles: [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Moderator' },
    { id: 3, name: 'User' },
  ],
};

const roleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
});

export default roleSlice.reducer;
