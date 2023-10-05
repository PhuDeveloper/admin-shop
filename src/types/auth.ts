import { ApiResponse } from '@/configs/response';

export interface SignInUserRequest {
  email: string;
  password: string;
}

export interface SignInUserResponse {
  accessToken: string;
  userId: number;
  roleName: string;
}

export interface RegisterRequest {
  fullName: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  roleId: number;
}

export interface SignInUserResponseData extends ApiResponse<SignInUserResponse> {}
