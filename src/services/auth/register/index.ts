import { getHttpClient } from '@/configs/httpClient';
import { ApiResponse } from '@/configs/response';
import { RegisterRequest, SignInUserResponseData } from '@/types/auth';
import { UsersEntity } from '@/types/user';

const API_URL = '/auth/register';

export async function registerUser(req: RegisterRequest): Promise<ApiResponse<UsersEntity>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
