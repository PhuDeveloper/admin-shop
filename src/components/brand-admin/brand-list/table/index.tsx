'use client';

import IsDeletedComponent from '@/components/is-deleted';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Space, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataTypeBrandList } from './type';

export default function BrandTableComponent() {
  const columns: ColumnsType<DataTypeBrandList> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: '20px',
    },
    {
      title: 'Thương hiệu',
      dataIndex: 'brand',
      key: 'brand',
      align: 'center',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'isDeleted',
      key: 'isDeleted',
      align: 'center',
      width: '20%',
    },
    {
      title: 'Thao tác',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: '20%',
    },
  ];

  const data: DataTypeBrandList[] = [
    {
      key: '1',
      stt: '1',
      brand: 'John Brown',
      isDeleted: <IsDeletedComponent isDeleted={0} />,
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa thương hiệu">
            <Button
              type="link"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              onClick={() => console.log('test')}
            />
          </Tooltip>
          <Tooltip title="Vô hiệu thương hiệu">
            <Button type="link" icon={<FontAwesomeIcon icon={faClose} />} />
          </Tooltip>
        </Space>
      ),
    },
    {
      key: '2',
      stt: '2',
      brand: 'John Brown',
      isDeleted: <IsDeletedComponent isDeleted={0} />,
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa thương hiệu">
            <Button
              type="link"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              onClick={() => console.log('test')}
            />
          </Tooltip>
          <Tooltip title="Vô hiệu thương hiệu">
            <Button type="link" icon={<FontAwesomeIcon icon={faClose} />}></Button>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: '3',
      stt: '3',
      brand: 'John Brown',
      isDeleted: <IsDeletedComponent isDeleted={1} />,
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa thương hiệu">
            <Button
              type="link"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              onClick={() => console.log('test')}
            />
          </Tooltip>
          <Tooltip title="Vô hiệu thương hiệu">
            <Button type="link" icon={<FontAwesomeIcon icon={faClose} />} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Card
      style={{
        margin: '10px',
        borderRadius: '15px',
      }}
    >
      <Table
        style={{ borderRadius: '10px' }}
        columns={columns}
        dataSource={data}
        title={() => <h3>Danh sách thương hiệu</h3>}
      />
    </Card>
  );
}
