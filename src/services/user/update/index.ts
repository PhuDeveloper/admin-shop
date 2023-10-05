import { getHttpClient } from '@/configs/httpClient';
import { ApiResponse } from '@/configs/response';
import { BrandEntityResponseData, UpdateBrandRequest } from '@/types/brand';
import { ProductEntityResponseData, UpdateProductRequest } from '@/types/product';
import { UpdateUserRequest, UsersEntity } from '@/types/user';

const API_URL = '/users/update';

export async function updateUser(req: UpdateUserRequest): Promise<ApiResponse<UsersEntity>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
