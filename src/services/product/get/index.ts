import { getHttpClient } from '@/configs/httpClient';
import { GetDetailProductRequest, ProductEntityResponseData } from '@/types/product';

const API_URL = '/product/search';

export async function getDetailProduct(
  req: GetDetailProductRequest,
): Promise<ProductEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(API_URL, { params: req });
  return resp.data;
}
