import { getHttpClient } from '@/configs/httpClient';
import { GetDetailProductRequest, ProductEntityResponseData } from '@/types/product';

export async function getDetailProduct(
  req: GetDetailProductRequest,
): Promise<ProductEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(`/product/${req.productId}`);
  return resp.data;
}
