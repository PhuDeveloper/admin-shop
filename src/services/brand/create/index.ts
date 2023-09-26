import { getHttpClient } from '@/configs/httpClient';
import { BrandEntityResponseData, CreateBrandRequest } from '@/types/brand';

const API_URL = '/brand/create';

export async function createBrand(req: CreateBrandRequest): Promise<BrandEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
