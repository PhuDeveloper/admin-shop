import { getHttpClient } from '@/configs/httpClient';
import { ApiResponse } from '@/configs/response';
import { CreateOrderRequest, OrdersEntity } from '@/types/order';

const API_URL = '/orders/create';

export async function createOrder(req: CreateOrderRequest): Promise<ApiResponse<OrdersEntity>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
