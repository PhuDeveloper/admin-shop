import { getHttpClient } from '@/configs/httpClient';
import { CategoryEntityResponseData, UpdateCategoryRequest } from '@/types/category';

const API_URL = '/category/update';

export async function updateCategory(
  req: UpdateCategoryRequest,
): Promise<CategoryEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
