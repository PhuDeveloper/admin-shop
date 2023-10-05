import { ApiResponse } from '@/configs/response';
import { OrdersEntity } from './order';
import { RolesEntity } from './roles';

export interface UsersEntity {
  id: number;
  fullName: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  created: number;
  updated: number;
  isDeleted: number;
  role: RolesEntity;
  orders: OrdersEntity[];
}

export interface GetListUserRequest {
  page?: number;
  limit?: number;
  phone?: string;
  roleId?: number;
  email?: string;
  fullName?: string;
}
export interface UserListResponse {
  user_list: UsersEntity[];
  total: number;
  page: number;
  limit: number;
}

export interface DataUpdateUser {
  fullName?: string;
  phone?: string;
  address?: string;
  role?: number;
}

export interface UpdateUserRequest {
  userId: number;
  data: DataUpdateUser;
}
export interface GetDetailUserRequest {
  userId: number;
}

export interface UserListResponseData extends ApiResponse<UserListResponse> {}
