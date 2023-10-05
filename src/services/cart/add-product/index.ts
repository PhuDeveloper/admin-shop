import { getHttpClient } from '@/configs/httpClient';
import { ApiResponse } from '@/configs/response';
import { AddProductToCartRequest } from '@/types/cart';
import { CategoryEntityResponseData, UpdateCategoryRequest } from '@/types/category';

const API_URL = '/carts/add-product';

export async function addProductToCart(req: AddProductToCartRequest): Promise<ApiResponse<any>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
