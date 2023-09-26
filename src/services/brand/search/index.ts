import { getHttpClient } from '@/configs/httpClient';
import { BrandListResponseData, GetListBrandRequest } from '@/types/brand';

const API_URL = '/brand/list';

export async function searchBrand(req: GetListBrandRequest): Promise<BrandListResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(API_URL, { params: req });
  return resp.data;
}
