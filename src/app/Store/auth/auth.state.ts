export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};
