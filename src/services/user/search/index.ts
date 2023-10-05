import { getHttpClient } from '@/configs/httpClient';
import { BrandListResponseData } from '@/types/brand';
import { GetListUserRequest, UserListResponseData } from '@/types/user';

const API_URL = '/users/list';

export async function searchUser(req: GetListUserRequest): Promise<UserListResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(API_URL, { params: req });
  return resp.data;
}
