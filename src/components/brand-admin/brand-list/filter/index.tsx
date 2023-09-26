'use client';

import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { useRouter } from 'next/navigation';

export default function BrandFilterComponent() {
  const router = useRouter();
  return (
    <Card
      style={{
        margin: '10px',
        borderRadius: '15px',
      }}
      title={<h4> Bộ lọc</h4>}
    >
      <Form name="filterProduct" labelWrap labelAlign="left" labelCol={{ flex: '30%' }}>
        <Row gutter={16}>
          <Col xs={24} lg={8}>
            <Form.Item
              name="productName"
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
              name="productCode"
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
              name="productStatus"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Trạng thái
                </p>
              }
            >
              <Input placeholder="Chọn trạng thái Thương hiệu" />
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
