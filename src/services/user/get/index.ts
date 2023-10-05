import { getHttpClient } from '@/configs/httpClient';
import { ApiResponse } from '@/configs/response';
import { GetDetailUserRequest, UsersEntity } from '@/types/user';

export async function getDetailUser(req: GetDetailUserRequest): Promise<ApiResponse<UsersEntity>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.get(`/users/${req.userId}`);
  return resp.data;
}
