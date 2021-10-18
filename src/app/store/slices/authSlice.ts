import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import { setLocalState, clearLocalState } from 'app/localStorage';
import { AuthState } from 'app/models/Auth';

export interface RegisterPayload {
  name: string,
  email: string,
  password: string,
  speciality: string,
}

// Define initial auth state
const initialState: AuthState = {
  isLoggedin: false,
  name: '',
  email: '',
  speciality: ''
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
      const { name, email, speciality } = action.payload;
      // Update Redux state
      state.isLoggedin = true;
      state.name = name.trim();
      state.email = email.trim();
      state.speciality = speciality;
      // Update localstorage
      setLocalState('auth', {isLoggedin: true, name: name, email: email, speciality: speciality});
    },
    logout: (state) => {
      // Update Redux state
      state.isLoggedin = false;
      state.name = '';
      state.email = '';
      state.speciality = '';
      // Update localstorage
      clearLocalState();
    }
  },
});

export const { register, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
