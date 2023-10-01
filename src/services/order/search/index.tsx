import { getHttpClient } from '@/configs/httpClient';
import { GetListOrderRequest, OrderListResponseData } from '@/types/order';

const API_URL = '/orders/list';

export async function searchOrders(req: GetListOrderRequest): Promise<OrderListResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(API_URL, { params: req });
  return resp.data;
}
