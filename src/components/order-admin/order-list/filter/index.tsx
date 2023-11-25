'use client';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import { OrdersFilterFormValue } from './type';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { OrderStatusEnum } from '@/enums/order';
import { GetListOrderRequest } from '@/types/order';
import { appendQueryStringToUrl } from '@/helper/url';
import useSearchUserInput from '@/hooks/user/useSearchUserInput';

export default function OrdersFilterComponent() {
  const [form] = Form.useForm<OrdersFilterFormValue>();
  const router = useRouter();
  const { userList } = useSearchUserInput();

  const handleSubmitFilter = (values: OrdersFilterFormValue) => {
    console.log('object', values?.user);
    const params: GetListOrderRequest = {};

    params.status = values?.status ? values.status : undefined;

    params.userId = values?.user?.value ? values?.user.value : undefined;

    router.push(appendQueryStringToUrl(window.location.href, params));
  };

  return (
    <Card
      style={{
        margin: '10px',
        borderRadius: '15px',
      }}
      title={<h4> Bộ lọc</h4>}
    >
      <Form
        name="filterProduct"
        labelWrap
        labelAlign="left"
        labelCol={{ flex: '30%' }}
        form={form}
        onFinish={handleSubmitFilter}
      >
        <Row gutter={16}>
          <Col xs={24} lg={8}>
            <Form.Item
              name="user"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Khách hàng
                </p>
              }
            >
              <Select
                showSearch
                allowClear
                labelInValue
                options={userList.map((item) => {
                  return {
                    value: item.id,
                    label: item.fullName,
                  };
                })}
                placeholder="Chọn khách hàng"
              />
            </Form.Item>
          </Col>

          <Col xs={24} lg={8}>
            <Form.Item
              name="status"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Trạng thái
                </p>
              }
            >
              <Select placeholder="Chọn trạng thái" allowClear options={OrderStatusEnum} />
            </Form.Item>
          </Col>

          <Col xs={24} lg={8}>
            <Form.Item
              name="created"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Ngày tạo
                </p>
              }
            >
              <Select placeholder="Chọn ngày" allowClear options={OrderStatusEnum} />
            </Form.Item>
          </Col>

          <Col xs={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Form.Item>
              <Button type="primary" icon={<SearchOutlined />} htmlType="submit">
                Tìm kiếm
              </Button>
              <Button
                danger
                ghost
                icon={<FontAwesomeIcon icon={faXmark} />}
                style={{ marginLeft: '10px' }}
                onClick={() => {
                  form.resetFields();
                  router.push('/admin/orders');
                }}
              >
                Hủy
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
