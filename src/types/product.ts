import { ApiResponse } from '@/configs/response';
import { BrandEntity } from './brand';
import { CategoryEntity } from './category';

export interface ProductEntity {
  id: number;
  productName: string;
  productStatus: number;
  productPriceOrg: number;
  productPriceDiscount: number;
  productStart: number;
  productDescription: string;
  productCode: string;
  productCreated: number;
  productUpdated: number;
  isDeleted: number;
  brand: BrandEntity;
  category: CategoryEntity;
  imageUrlList: string[];
  imageUrl: string;
}

export interface Product {
  product_id: number;
  product_name: string;
  product_status: number;
  product_price_org: number;
  product_price_discount: number;
  product_start: number;
  product_description: string | null;
  product_code: string;
  product_image: string;
  product_image_list: string | null;
  product_created: number;
  product_updated: number | null;
  product_type: number | null;
  is_deleted: number;
  brand: BrandEntity;
  category: CategoryEntity;
}

export interface ProductListResponse {
  product_list: ProductEntity[];
  total: number;
  page: number;
  limit: number;
}

export interface GetListProductRequest {
  productId?: number;
  productName?: string;
  productStatus?: number;
  productCode?: string;
  brandId?: number;
  categoryId?: number;
  isDeleted?: number;
  page?: number;
  limit?: number;
}

export interface CreateProductRequest {
  productName: string;
  brandId: number;
  categoryId: number;
  productPriceOrg: number;
  productStart: number;
  productCode: string;
  productPriceDiscount: number;
  isDeleted: number;
  productStatus: number;
  productDescription: string;
  imageUrlList: string[];
  imageUrl: string;
}

export interface DataUpdateProduct {
  productName?: string;
  brand?: BrandEntity;
  category?: CategoryEntity;
  productPriceOrg?: number;
  productStart?: number;
  productStatus?: number;
  productCreated?: number;
  productUpdated?: number;
  productPriceDiscount?: number;
  isDeleted?: number;
  productDescription?: string;
  imageUrlList?: string[];
  imageUrl?: string;
}

export interface UpdateProductRequest {
  productId: number;
  data: DataUpdateProduct;
}

export interface GetDetailProductRequest {
  productId: number;
}

export interface ProductListResponseData extends ApiResponse<ProductListResponse> {}
export interface ProductEntityResponseData extends ApiResponse<ProductEntity> {}
