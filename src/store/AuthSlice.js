import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password, users } = action.payload;

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const userWithoutPassword = { ...user };
        delete userWithoutPassword.password;
        state.currentUser = userWithoutPassword;
      } else {
        state.currentUser = null; // Clear currentUser on invalid login
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
