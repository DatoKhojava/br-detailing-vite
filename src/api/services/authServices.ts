import { axiosInstance } from "./axiosInstance";
import { AuthLoginResponse, LoginUser } from "../types";

export const authServices = {
  getAuthToken: async ({ email, password }: LoginUser) => {
    const res = await axiosInstance.post<AuthLoginResponse>("auth/login", {
      email,
      password,
    });
    return res.data;
  },
};
