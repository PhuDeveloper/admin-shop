import { Tag } from 'antd';
import { RoleComponentProps } from './type';

export default function RoleUserComponent(props: RoleComponentProps) {
  const { role } = props;

  let color = 'success';
  let value = 'Admin';

  switch (role) {
    case 1:
      color = 'success';
      value = 'Admin';
      break;
    case 2:
      color = 'processing';
      value = 'Khách hàng';
      break;

    default:
      color = 'warning';
      value = 'Khác';
  }

  return <Tag color={color}>{value}</Tag>;
}
