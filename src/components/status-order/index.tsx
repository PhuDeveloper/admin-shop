import { Tag } from 'antd';
import { StatusOrderComponentProps } from './type';

export default function StatusOrderComponent(props: StatusOrderComponentProps) {
  const { status } = props;

  let color = 'warning';
  let value = 'Vùa tạo';

  switch (status) {
    case 1:
      color = 'warning';
      value = 'Vùa tạo';
      break;
    case 2:
      color = 'processing';
      value = 'Đang giao';
      break;
    case 3:
      color = 'success';
      value = 'Hoàn thành';
      break;
    case 4:
      color = 'error';
      value = 'Hủy';
      break;
    default:
      color = 'warning';
      value = 'Khác';
  }

  return <Tag color={color}>{value}</Tag>;
}
