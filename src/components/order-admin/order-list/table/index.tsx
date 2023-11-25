'use client';

import { Button, Card, Space, Table, Tooltip, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DataTypeOrderList } from './type';
import useSearchOrders from '@/hooks/orders/useSearchOrders';
import { useRouterOrdersParams } from '@/hooks/orders/useRouterOrders';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { formatNumber } from '@/helper/number';
import StatusOrderComponent from '@/components/status-order';

const { Text } = Typography;

export default function OrdersTableComponent() {
  const { orderList, requestQuery } = useSearchOrders();
  const { pageParam } = useRouterOrdersParams();
  const numberStartToCount = ((pageParam ? Number(pageParam) : 1) - 1) * 20;

  const columns: ColumnsType<DataTypeOrderList> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: '8%',
      align: 'center',
    },
    {
      title: 'Mã đơn hàng',
      dataIndex: 'orderCode',
      key: 'orderCode',
      align: 'center',
    },
    {
      title: 'Thông tin giao hàng',
      dataIndex: 'customer',
      key: 'customer',
      align: 'center',
      width: '30%',
    },
    {
      title: 'Tổng tiền đơn hàng',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      align: 'center',
      width: '10%',
    },
    {
      title: 'Thời gian tạo đơn',
      dataIndex: 'created',
      key: 'created',
      align: 'center',
      width: '15%',
    },
    {
      title: 'Trạng thái đơn hàng',
      dataIndex: 'status',
      key: 'status',
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

  const data: DataTypeOrderList[] = orderList.map((item, index) => {
    const totalPrice = item.orderItem?.reduce((sum, item) => {
      return sum + item.currentProductPrice;
    }, 0);
    return {
      key: item.id.toString(),
      stt: <div>{numberStartToCount + index + 1}</div>,
      orderCode: <div style={{ fontWeight: 550 }}>{item.orderCode}</div>,
      customer: (
        <div>
          <Text>
            {item?.deliveryAddress?.name} - {item?.deliveryAddress?.phone}{' '}
          </Text>
          <br />
          <Text>{item?.deliveryAddress?.address}</Text>
        </div>
      ),
      created: (
        <div>
          <Text>{item?.created ? dayjs(item?.created * 1000).format('DD/MM/YYYY') : ''}</Text>
        </div>
      ),
      status: <StatusOrderComponent status={item?.status} />,
      totalPrice: <div>{formatNumber(totalPrice)} đ</div>,
      action: (
        <Space size="large">
          <Tooltip title="Chi tiết đơn hàng">
            <Link href={`/admin/orders/${item?.id}`}>
              <Button type="link" icon={<FontAwesomeIcon icon={faPenToSquare} />} />
            </Link>
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
        loading={requestQuery.status === 'loading'}
        dataSource={data}
        title={() => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3>Danh sách đơn hàng</h3>
            {/* <ButtonCreateComponent title="Tạo thương hiệu" url="/admin/brand/create" /> */}
          </div>
        )}
      />
    </Card>
  );
}
