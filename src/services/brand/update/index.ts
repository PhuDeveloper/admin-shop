import { getHttpClient } from '@/configs/httpClient';
import { BrandEntityResponseData, UpdateBrandRequest } from '@/types/brand';
import { ProductEntityResponseData, UpdateProductRequest } from '@/types/product';

const API_URL = '/product/update';

export async function updateBrand(req: UpdateBrandRequest): Promise<BrandEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
