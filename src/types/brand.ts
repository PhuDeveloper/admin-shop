import { ApiResponse } from '@/configs/response';
import { ProductEntity } from './product';

export interface BrandEntity {
  id: number;
  brandName?: string;
  brandCode?: string;
  brandCreated?: number;
  brandUpdated?: number;
  isDeleted?: number;
  brandDescription?: string;
  product?: ProductEntity[];
}

export interface Brand {
  brand_id: number;
  brand_name: string;
  brand_code: string;
  brand_created: number;
  brand_updated: number;
  is_deleted: number;
  brand_description?: string;
}

export interface BrandListResponse {
  brand_list: BrandEntity[];
  total: number;
  page: number;
  limit: number;
}

export interface GetListBrandRequest {
  brandId?: number;
  brandCode?: string;
  brandName?: string;
  isDeleted?: number;
  page?: number;
  limit?: number;
}

export interface CreateBrandRequest {
  brandName: string;
  brandCode: string;
  brandDescription?: string;
}

export interface DataUpdateBrand {
  brandName?: string;
  isDeleted?: number;
  brandDescription?: string;
}

export interface UpdateBrandRequest {
  brandId: number;
  data: DataUpdateBrand;
}

export interface GetDetailBrandRequest {
  brandId: number;
}

export interface BrandListResponseData extends ApiResponse<BrandListResponse> {}
export interface BrandEntityResponseData extends ApiResponse<BrandEntity> {}
