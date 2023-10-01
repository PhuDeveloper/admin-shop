import { PermissionEntity } from './permission';
import { UsersEntity } from './user';

export interface RolesEntity {
  id: number;
  roleName: string;
  created: number;
  updated: number;
  user: UsersEntity;
  permission: PermissionEntity[];
}
