import { Tag } from 'antd';
import { StatusComponentProps } from './type';

export default function StatusComponent(props: StatusComponentProps) {
  const { status } = props;

  let color = 'success';
  let value = 'Còn hàng';

  switch (status) {
    case 0:
      color = 'success';
      value = 'Còn hàng';
      break;
    case 1:
      color = 'warning';
      value = 'Sắp hết hàng';
      break;
    case 2:
      color = 'error';
      value = 'Hết hàng';
      break;
    default:
      color = 'success';
      value = 'Còn hàng';
  }

  return <Tag color={color}>{value}</Tag>;
}
