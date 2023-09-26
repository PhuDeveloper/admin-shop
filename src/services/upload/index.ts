import { getHttpClient } from '@/configs/httpClient';
import { UploadImageRequest, UploadImageResponse } from './type';
import { ApiResponse } from '@/configs/response';

const API_URL = '/upload/image';

export async function uploadFile(
  req: UploadImageRequest,
): Promise<ApiResponse<UploadImageResponse>> {
  const httpClient = await getHttpClient();
  const resp = await httpClient.post(API_URL, req, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return resp.data;
}
