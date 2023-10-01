import { OrdersEntity } from './order';
import { RolesEntity } from './roles';

export interface UsersEntity {
  id: number;
  fullName: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  created: number;
  updated: number;
  isDeleted: number;
  role: RolesEntity;
  orders: OrdersEntity[];
}
