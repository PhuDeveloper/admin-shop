import { getHttpClient } from '@/configs/httpClient';
import { CreateProductRequest, ProductEntityResponseData } from '@/types/product';

const API_URL = '/product/create';

export async function createProduct(req: CreateProductRequest): Promise<ProductEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
