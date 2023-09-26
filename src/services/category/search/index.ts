import { getHttpClient } from '@/configs/httpClient';
import { BrandListResponseData, GetListBrandRequest } from '@/types/brand';
import { CategoryListResponseData, GetListCategoryRequest } from '@/types/category';

const API_URL = '/category/list';

export async function searchCategory(
  req: GetListCategoryRequest,
): Promise<CategoryListResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(API_URL, { params: req });
  return resp.data;
}
