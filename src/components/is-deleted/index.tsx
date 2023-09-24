import { Tag } from 'antd';
import { IsDeletedComponentProps } from './type';

export default function IsDeletedComponent(props: IsDeletedComponentProps) {
  const { isDeleted } = props;

  let color = 'success';
  let value = 'Đang hoạt động';

  switch (isDeleted) {
    case 0:
      color = 'success';
      value = 'Đang hoạt động';
      break;
    case 1:
      color = 'error';
      value = 'Đã vô hiệu';
      break;
    default:
      color = 'success';
      value = 'Đang hoạt động';
  }

  return <Tag color={color}>{value}</Tag>;
}
