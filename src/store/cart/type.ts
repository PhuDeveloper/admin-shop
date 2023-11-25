import { ProductEntity } from '@/types/product';

export interface CartItemInterface {
  product: ProductEntity;
  quantity: number;
  price: number;
}

export interface CartInitInterface {
  listCart: CartItemInterface[];
}

export interface UpdateQuantityCart {
  index: number;
  data: CartItemInterface;
}
