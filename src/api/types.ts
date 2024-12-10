export interface LoginUser {
  email: string;
  password: string;
}

export interface AuthLoginResponse {
  message: string;
  access_token: string;
}
