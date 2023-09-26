import { getHttpClient } from '@/configs/httpClient';
import { BrandEntityResponseData, CreateBrandRequest } from '@/types/brand';
import { CategoryEntityResponseData, CreateCategoryRequest } from '@/types/category';

const API_URL = '/category/create';

export async function createCategory(
  req: CreateCategoryRequest,
): Promise<CategoryEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
