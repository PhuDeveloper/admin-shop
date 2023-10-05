import { ProductEntity } from './product';
import { UsersEntity } from './user';

export interface AddProductToCartRequest {
  productId: number[];
}

export interface CartsEntity {
  id: number;
  user: UsersEntity;
  product: ProductEntity[];
}
