import { Button, Tooltip } from 'antd';
import { ButtonCreateComponentProps } from './type';
import { PlusCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function ButtonCreateComponent(props: ButtonCreateComponentProps) {
  const { title, url } = props;
  return (
    <Tooltip title={title}>
      <Link href={url}>
        <Button type="link" icon={<PlusCircleOutlined />} style={{ marginLeft: '10px' }} />
      </Link>
    </Tooltip>
  );
}
