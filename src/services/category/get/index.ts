import { getHttpClient } from '@/configs/httpClient';
import { BrandEntityResponseData, GetDetailBrandRequest } from '@/types/brand';
import { CategoryEntityResponseData, GetDetailCategoryRequest } from '@/types/category';

const API_URL = '/brand/search';

export async function getDetailCategory(
  req: GetDetailCategoryRequest,
): Promise<CategoryEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(API_URL, { params: req });
  return resp.data;
}
