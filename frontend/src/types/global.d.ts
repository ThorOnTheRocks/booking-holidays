export type User = {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
};

export type UserInfo = {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
};

export interface ApiErrorResponse {
  message: string;
}
