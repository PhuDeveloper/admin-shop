import { getHttpClient } from '@/configs/httpClient';
import { BrandEntityResponseData, GetDetailBrandRequest } from '@/types/brand';

export async function getDetailBrand(req: GetDetailBrandRequest): Promise<BrandEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(`/brand/${req.brandId}`);
  return resp.data;
}
