import { getHttpClient } from '@/configs/httpClient';
import { ApiResponse } from '@/configs/response';
import { CartsEntity } from '@/types/cart';

export async function getCart(): Promise<ApiResponse<CartsEntity>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(`/carts/get-cart`);
  return resp.data;
}
