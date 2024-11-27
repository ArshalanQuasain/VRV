import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123',
      roleId: 1,
      isActive: true,
    },
    {
      id: '2',
      name: 'Moderator',
      email: 'mod1@example.com',
      password: 'mod123',
      roleId: 2,
      isActive: true,
    },
    {
      id: '3',
      name: 'Regular User',
      email: 'user1@example.com',
      password: 'user123',
      roleId: 3,
      isActive: true,
    },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({ ...action.payload, id: crypto.randomUUID() });
    },
    updateUser: (state, action) => {
      const { userId, updates } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          ...updates,
          roleId: parseInt(updates.roleId, 10),
        };
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
