import { getHttpClient } from '@/configs/httpClient';
import { ProductEntityResponseData, UpdateProductRequest } from '@/types/product';

const API_URL = '/product/update';

export async function updateProduct(req: UpdateProductRequest): Promise<ProductEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
