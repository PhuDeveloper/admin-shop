'use client';

import { appendQueryStringToUrl } from '@/helper/url';
import { GetListUserRequest } from '@/types/user';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import { BrandFilterFormValue } from './type';

export default function UserFilterComponent() {
  const [form] = Form.useForm<BrandFilterFormValue>();

  const router = useRouter();

  const handleSubmitFilter = (values: BrandFilterFormValue) => {
    const params: GetListUserRequest = {};

    params.fullName = values?.fullName && values.fullName.length > 0 ? values.fullName : undefined;

    params.phone = values?.phone && values?.phone.length > 0 ? values.phone : undefined;

    params.roleId = values.roleId !== undefined ? values.roleId : undefined;

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
        name="filterUser"
        labelWrap
        labelAlign="left"
        labelCol={{ flex: '40%' }}
        form={form}
        onFinish={handleSubmitFilter}
      >
        <Row gutter={16}>
          <Col xs={24} lg={8}>
            <Form.Item
              name="fullName"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Tên người dùng
                </p>
              }
            >
              <Input placeholder="Nhập tên người dùng" />
            </Form.Item>
          </Col>

          <Col xs={24} lg={8}>
            <Form.Item
              name="phone"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Số điện thoại
                </p>
              }
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>
          </Col>

          <Col xs={24} lg={8}>
            <Form.Item
              name="roleId"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Vai trò
                </p>
              }
            >
              <Select
                placeholder="Chọn vai trò"
                allowClear
                options={[
                  { value: 1, label: 'Admin' },
                  { value: 2, label: 'Khách hàng' },
                ]}
              />
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
                  router.push('/admin/user');
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
