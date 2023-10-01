import { OrdersEntity } from './order';
import { ProductEntity } from './product';

export interface OrderItemEntity {
  id: number;
  order: OrdersEntity;
  quantity: number;
  product: ProductEntity;
  currentProductPrice: number;
}
