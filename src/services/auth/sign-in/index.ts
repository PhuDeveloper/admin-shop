import { getHttpClient } from '@/configs/httpClient';
import { SignInUserRequest, SignInUserResponseData } from '@/types/auth';
import { CreateProductRequest, ProductEntityResponseData } from '@/types/product';

const API_URL = '/auth/login';

export async function signInUser(req: SignInUserRequest): Promise<SignInUserResponseData> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req);
  return resp.data;
}
