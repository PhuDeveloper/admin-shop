'use client';

import { formatNumber } from '@/helper/number';
import useGetDetailOrder from '@/hooks/orders/useGetDetailOrder';
import { useRouterOrdersParams } from '@/hooks/orders/useRouterOrders';
import { updateOrder } from '@/services/order/update';
import { UpdateOrderRequest } from '@/types/order';
import { Avatar, Button, Card, Col, Form, List, Row, Select, Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const { Text } = Typography;

export interface FormUpdateInterface {
  orderStatus: number;
}

export default function InfoOrderComponent() {
  const { orderDetail } = useGetDetailOrder();
  const { id } = useRouterOrdersParams();
  const [form] = Form.useForm<FormUpdateInterface>();

  const handleUpdateStatus = (value: FormUpdateInterface) => {
    const request: UpdateOrderRequest = {
      orderId: Number(id),
      data: { status: value.orderStatus },
    };

    updateOrder(request)
      .then(() => {
        toast.success(`Cập nhật trạng thái thành công`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      })
      .catch(() => {
        toast.error(`Cập nhật thất bại`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  };

  useEffect(() => {
    form.setFieldsValue({ orderStatus: orderDetail?.status });
  }, [orderDetail]);

  return (
    <Card
      bordered={false}
      title={`Thông tin đơn hàng - ${orderDetail?.orderCode}`}
      style={{ margin: '8px', paddingBottom: '20px' }}
    >
      <Row gutter={[16, 60]}>
        <Col xs={4}>
          <Text strong>Sản phẩm trong đơn :</Text>
        </Col>
        <Col xs={20}>
          <List
            dataSource={orderDetail?.orderItem}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.product.imageUrl} alt="" size="large" />}
                  title={`# ${item.product.productCode}`}
                  description={item.product.productName}
                />
                <div>
                  <Text style={{ marginRight: '10px' }}>Số lượng : {item.quantity}</Text>
                  <Text>
                    Thành tiền : {formatNumber(item.currentProductPrice * item.quantity)} đ
                  </Text>
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={4}>
          <Text strong>Tổng tiền đơn hàng :</Text>
        </Col>{' '}
        <Col xs={20}></Col>
        <Col xs={4}>
          <Text strong>Thông tin giao hàng :</Text>
        </Col>
        <Col xs={20}>
          <div>
            <Text>Khách hàng : {orderDetail?.deliveryAddress?.name}</Text>
          </div>
          <div>
            <Text>Số điện thoại : {orderDetail?.deliveryAddress?.phone}</Text>
          </div>

          <div>
            <Text> Địa chỉ : {orderDetail?.deliveryAddress?.address}</Text>
          </div>
        </Col>
        <Col xs={4}>
          <Text strong>Thời gian tạo đơn :</Text>
        </Col>
        <Col xs={20}>
          <Text>
            {orderDetail?.created && orderDetail?.created !== 0
              ? dayjs(orderDetail?.created * 1000).format('DD/MM/YYYY')
              : ''}
          </Text>
        </Col>
        <Col xs={4}>
          <Text strong>Trạng thái đơn hàng :</Text>
        </Col>
        <Col xs={20}>
          <Form name="updateStatus" onFinish={handleUpdateStatus} form={form}>
            <Form.Item name="orderStatus">
              <Select
                style={{ width: '167px', marginRight: '20px' }}
                placeholder="Chọn trạng thái"
                options={[
                  { value: 1, label: 'Vừa tạo' },
                  { value: 2, label: 'Đang giao' },
                  { value: 3, label: 'Giao thành công' },
                  { value: 4, label: 'Hủy đơn' },
                ]}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Cập nhật trạng thái
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}
