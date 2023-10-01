import { OrdersEntity } from './order';
import { UsersEntity } from './user';

export interface DeliveryAddressEntity {
  id: number;
  user: UsersEntity;
  phone: string;
  address: string;
  name: string;
  isDefault: number;
  order: OrdersEntity[];
}
