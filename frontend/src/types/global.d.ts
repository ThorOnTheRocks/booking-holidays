export type User = {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
};

export type AuthResponse = {
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  token: string;
};
