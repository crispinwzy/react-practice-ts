import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// Define auth-related types
export interface AuthState {
  isLoggedin: boolean,
  name: string,
  email: string
}

export interface RegisterPayload {
  name: string,
  email: string,
  password: string
}

// Define initial auth state
const initialState: AuthState = {
  isLoggedin: false,
  name: '',
  email: '',
};

// let preloadedState;
// const persistedTodosString = localStorage.getItem('auth');

// if (persistedTodosString) {
//   preloadedState = {
//     auth: JSON.parse(persistedTodosString)
//   }
// }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<RegisterPayload>) => {
      const {name, email} = action.payload;

      state.isLoggedin = true;
      state.name = name.trim();
      state.email = email.trim();
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.name = '';
      state.email = '';
    }
  },
});

export const { register, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
