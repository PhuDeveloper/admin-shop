import { ApiResponse } from '@/configs/response';

export interface SignInUserRequest {
  email: string;
  password: string;
}

export interface SignInUserResponse {
  accessToken: string;
}

export interface SignInUserResponseData extends ApiResponse<SignInUserResponse> {}
