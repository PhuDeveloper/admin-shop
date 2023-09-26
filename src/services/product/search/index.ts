import { getHttpClient } from '@/configs/httpClient';
import { GetListProductRequest, ProductListResponseData } from '@/types/product';

const API_URL = '/product/list';

export async function searchProduct(req: GetListProductRequest): Promise<ProductListResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(API_URL, { params: req });
  return resp.data;
}
