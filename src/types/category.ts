import { ApiResponse } from '@/configs/response';
import { ProductEntity } from './product';

export interface CategoryEntity {
  id: number;
  categoryName: string;
  categoryCreated: number;
  categoryUpdated: number;
  isDeleted: boolean;
  categoryDescription?: string;
  product: ProductEntity[];
}

export interface Category {
  category_id: number;
  category_name: string;
  category_code: string;
  category_created: number;
  category_updated: number;
  is_deleted: number;
  category_description?: string;
}

export interface CategoryListResponse {
  category_list: CategoryEntity[];
  total: number;
  page: number;
  limit: number;
}

export interface GetListCategoryRequest {
  categoryId?: number;
  categoryName?: string;
  isDeleted?: boolean;
  page?: number;
  limit?: number;
}

export interface CreateCategoryRequest {
  categoryName: string;
  categoryDescription?: string;
}

export interface DataUpdateCategory {
  categoryName?: string;
  categoryUpdated?: number;
  isDeleted?: boolean;
  categoryDescription?: string;
}

export interface UpdateCategoryRequest {
  categoryId: number;
  data: DataUpdateCategory;
}

export interface CategoryListResponseData extends ApiResponse<CategoryListResponse> {}
export interface CategoryEntityResponseData extends ApiResponse<CategoryEntity> {}
