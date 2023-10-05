import { ApiResponse } from '@/configs/response';
import { OrderItem, OrderItemEntity } from './order_item';
import { UsersEntity } from './user';
import { DeliveryAddressEntity } from './deivery-address';

export interface OrdersEntity {
  id: number;
  created: number;
  updated: number;
  user: UsersEntity;
  deliveryAddress: DeliveryAddressEntity;
  orderItem: OrderItemEntity[];
  status: number;
}
export interface OrderListResponse {
  order_list: OrdersEntity[];
  total: number;
  page: number;
  limit: number;
}

export interface GetListOrderRequest {
  userId?: number;
  status?: number;
  page?: number;
  limit?: number;
}

export interface CreateOrderRequest {
  orderItem: OrderItem[];
}

export interface OrderListResponseData extends ApiResponse<OrderListResponse> {}
