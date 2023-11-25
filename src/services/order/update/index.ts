import { getHttpClient } from '@/configs/httpClient';
import { ApiResponse } from '@/configs/response';
import { OrdersEntity, UpdateOrderRequest } from '@/types/order';

const API_URL = '/orders/update';

export async function updateOrder(req: UpdateOrderRequest): Promise<ApiResponse<OrdersEntity>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
