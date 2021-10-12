import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { getLocalState } from './localStorage';

// Prepare data from localstorage
const preloadedState = {
  auth: getLocalState('auth') || {}
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: preloadedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
