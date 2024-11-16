import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
  }
  
  const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login(state, action: PayloadAction<string>) {
        state.isAuthenticated = true;
        state.token = action.payload;
        localStorage.setItem('token', action.payload); 
      },
      logout(state) {
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem('token');
      },
      checkSession(state) {
        const token = localStorage.getItem('token');
        if (token) {
          state.isAuthenticated = true;
          state.token = token;
        }
      },
    },
  });
  
  export const { login, logout, checkSession } = authSlice.actions;
  export default authSlice.reducer;
  