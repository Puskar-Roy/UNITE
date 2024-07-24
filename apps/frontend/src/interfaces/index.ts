import { ReactNode } from "react";

export interface State {
  user: User | null;
}


export interface User {
  message?: string;
  success?: boolean;
  token?: string;
  email?: string;
  id?: string;
  name?: string;
  image?:string;
}

export interface Action {
  type: string;
  payload?: unknown;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}


export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  phone:string
}
export interface LoginFormData {
  email: string;
  password: string;
}


export interface LoginVerifyData{
  email?: string;
  otp: string;
}