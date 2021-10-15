import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import { setLocalState, clearLocalState } from 'app/localStorage';

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
      // Update Redux state
      state.isLoggedin = true;
      state.name = name.trim();
      state.email = email.trim();
      // Update localstorage
      setLocalState('auth', {isLoggedin: true, name: name, email: email});
    },
    logout: (state) => {
      // Update Redux state
      state.isLoggedin = false;
      state.name = '';
      state.email = '';
      // Update localstorage
      clearLocalState();
    }
  },
});

export const { register, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
