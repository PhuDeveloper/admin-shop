import { getHttpClient } from '@/configs/httpClient';
import { BrandEntityResponseData, GetDetailBrandRequest } from '@/types/brand';

const API_URL = '/brand/search';

export async function getDetailBrand(req: GetDetailBrandRequest): Promise<BrandEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(API_URL, { params: req });
  return resp.data;
}
