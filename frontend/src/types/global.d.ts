export type UserBaseInfo = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type UserRegistration = UserBaseInfo<Omit, 'id'> & {
  password: string;
};

export type AuthResponse = UserBaseInfo & {
  token: string;
};

interface ValidateTokenResponse {
  userId: string;
}
export interface ApiErrorResponse {
  message: string;
}
