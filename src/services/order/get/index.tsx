import { getHttpClient } from '@/configs/httpClient';
import { ApiResponse } from '@/configs/response';
import { GetDetailOrderRequest, OrdersEntity } from '@/types/order';

export async function getDetailOrders(
  req: GetDetailOrderRequest,
): Promise<ApiResponse<OrdersEntity>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(`/orders/${req.orderId}`);
  return resp.data;
}
