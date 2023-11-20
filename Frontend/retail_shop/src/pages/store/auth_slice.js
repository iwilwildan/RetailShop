import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials(state, action) {
      //immer lib used by the toolkit will create state copy , so its still immutable
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout(state, action) {
      state.user = null;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => {
  return state.auth.user;
};
export const selectCurrentToken = (state) => state.auth.token;
