import { getHttpClient } from '@/configs/httpClient';
import { BrandEntityResponseData, GetDetailBrandRequest } from '@/types/brand';
import { CategoryEntityResponseData, GetDetailCategoryRequest } from '@/types/category';

export async function getDetailCategory(
  req: GetDetailCategoryRequest,
): Promise<CategoryEntityResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(`/category/${req.categoryId}`);
  return resp.data;
}
