'use client';

import { BrandIsDeletedEnum } from '@/enums/brand';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import { BrandFilterFormValue } from './type';
import { appendQueryStringToUrl } from '@/helper/url';
import { SearchBrandParams } from '@/types/brand';

export default function BrandFilterComponent() {
  const [form] = Form.useForm<BrandFilterFormValue>();

  const router = useRouter();

  const handleSubmitFilter = (values: BrandFilterFormValue) => {
    const params: SearchBrandParams = {};

    params.brandName =
      values?.brandName && values.brandName.length > 0 ? values.brandName : undefined;

    params.brandCode =
      values?.brandCode && values?.brandCode.length > 0 ? values.brandCode : undefined;

    params.isDeleted = values.isDeleted !== undefined ? values.isDeleted : undefined;

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
              name="brandName"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Tên thương hiệu
                </p>
              }
            >
              <Input placeholder="Nhập tên thương hiệu" />
            </Form.Item>
          </Col>

          <Col xs={24} lg={8}>
            <Form.Item
              name="brandCode"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Mã thương hiệu
                </p>
              }
            >
              <Input placeholder="Nhập mã thương hiệu" />
            </Form.Item>
          </Col>

          <Col xs={24} lg={8}>
            <Form.Item
              name="isDeleted"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Trạng thái
                </p>
              }
            >
              <Select placeholder="Chọn trạng thái" allowClear options={BrandIsDeletedEnum} />
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
                  router.push('/admin/brand');
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
