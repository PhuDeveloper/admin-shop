'use client';

import ButtonCreateComponent from '@/components/btn-create';
import StatusComponent from '@/components/status';
import { formatNumber } from '@/helper/number';
import { useRouterProductParams } from '@/hooks/product/useRouterProduct';
import useSearchProduct from '@/hooks/product/useSearchProduct';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Space, Table, Tooltip, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import { DataTypeProductList } from './type';

const { Text } = Typography;

export default function ProductTableComponent() {
  const { productList } = useSearchProduct();
  const { pageParam } = useRouterProductParams();
  const numberStartToCount = ((pageParam ? Number(pageParam) : 1) - 1) * 20;

  const columns: ColumnsType<DataTypeProductList> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      align: 'center',
      width: '8%',
    },
    {
      title: 'Sản phẩm ',
      dataIndex: 'product',
      key: 'product',
      align: 'center',
    },
    {
      title: 'Danh mục',
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

  const data: DataTypeProductList[] = productList.map((item, index) => {
    return {
      key: item.id.toString(),
      stt: <div>{numberStartToCount + index + 1}</div>,
      product: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <img src={item?.imageUrl} width={50} height={60} style={{ borderRadius: '5px' }} />
          </div>
          <div style={{ textAlign: 'start', paddingLeft: '5px', marginLeft: '5px' }}>
            <Text style={{ fontWeight: 550 }}>{item?.productName}</Text>
            <br />
            <Text italic>#{item?.productCode}</Text>
          </div>
        </div>
      ),
      productType: <div>{item?.category?.categoryName ?? ''}</div>,
      brand: <div>{item?.brand?.brandName ?? ''}</div>,
      productPrice: <div>{formatNumber(item?.productPriceOrg)} đ</div>,
      productStatus: <StatusComponent status={item.productStatus} />,
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa sản phẩm">
            <Link href={`/admin/product/${item.id}`}>
              <Button
                type="link"
                icon={<FontAwesomeIcon icon={faPenToSquare} />}
                onClick={() => console.log('test')}
              />
            </Link>
          </Tooltip>
          <Tooltip title="Vô hiệu sản phẩm">
            <Button type="link" icon={<FontAwesomeIcon icon={faClose} />}></Button>
          </Tooltip>
        </Space>
      ),
    };
  });

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
        scroll={{ x: '1000px', y: '600px' }}
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
