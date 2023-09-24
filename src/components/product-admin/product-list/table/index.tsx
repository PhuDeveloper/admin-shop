'use client';

import StatusComponent from '@/components/status';
import { PlusCircleOutlined } from '@ant-design/icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Space, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataTypeProductList } from './type';
import Link from 'next/link';
import ButtonCreateComponent from '@/components/btn-create';

export default function ProductTableComponent() {
  const columns: ColumnsType<DataTypeProductList> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      align: 'center',
      width: '20px',
    },
    {
      title: 'Sản phẩm ',
      dataIndex: 'product',
      key: 'product',
      align: 'center',
    },
    {
      title: 'loại sản phẩm',
      dataIndex: 'productType',
      key: 'productType',
      align: 'center',
      width: '15%',
    },
    {
      title: 'Thương hiệu',
      key: 'brand',
      dataIndex: 'brand',
      align: 'center',
      width: '20%',
    },
    {
      title: 'Giá',
      key: 'productPrice',
      dataIndex: 'productPrice',
      align: 'center',
      width: '15%',
    },
    {
      title: 'Trạng thái sản phẩm',
      key: 'productStatus',
      dataIndex: 'productStatus',
      align: 'center',
      width: '10%',
    },
    {
      title: 'Thao tác',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: '10%',
    },
  ];

  const data: DataTypeProductList[] = [
    {
      key: '1',
      stt: '1',
      product: 32,
      productType: 'New York No. 1 Lake Park',
      brand: 'Test',
      productPrice: '10',
      productStatus: <StatusComponent status={0} />,
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa sản phẩm">
            <Button
              type="link"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              onClick={() => console.log('test')}
            />
          </Tooltip>
          <Tooltip title="Vô hiệu sản phẩm">
            <Button type="link" icon={<FontAwesomeIcon icon={faClose} />}></Button>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: '2',
      stt: '2',
      product: 32,
      productType: 'New York No. 1 Lake Park',
      brand: 'Test',
      productPrice: '10',
      productStatus: <StatusComponent status={1} />,
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa sản phẩm">
            <Button
              type="link"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              onClick={() => console.log('test')}
            />
          </Tooltip>
          <Tooltip title="Vô hiệu sản phẩm">
            <Button type="link" icon={<FontAwesomeIcon icon={faClose} />}></Button>
          </Tooltip>
        </Space>
      ),
    },
    {
      key: '3',
      stt: '3',
      product: 32,
      productType: 'New York No. 1 Lake Park',
      brand: 'Test',
      productPrice: '10',
      productStatus: <StatusComponent status={2} />,
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa sản phẩm">
            <Button
              type="link"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              onClick={() => console.log('test')}
            />
          </Tooltip>
          <Tooltip title="Xóa sản phẩm">
            <Button type="link" icon={<FontAwesomeIcon icon={faClose} />}></Button>
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
        title={() => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3>Danh sách sản phẩm</h3>
            <ButtonCreateComponent title="Tạo sản phẩm" url="/admin/product/create" />
          </div>
        )}
      />
    </Card>
  );
}
