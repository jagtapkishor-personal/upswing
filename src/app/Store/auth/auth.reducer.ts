import { createReducer, on } from '@ngrx/store';
import { initialAuthState, AuthState } from './auth.state';
import * as AuthActions from '../auth/auth.action';

export const authReducer = createReducer<AuthState>(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, userData) => ({
    ...state,
    isAuthenticated: true,
    user: userData,
  })),
  on(AuthActions.logout, () => initialAuthState)
);
