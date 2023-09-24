'use client';

import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';

export default function ProductFilterComponent() {
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
          <Col xs={24} md={8}>
            <Form.Item
              name="productName"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Tên sản phẩm
                </p>
              }
            >
              <Input placeholder="Nhập tên sản phẩm" />
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              name="productCode"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Mã sản phẩm
                </p>
              }
            >
              <Input placeholder="Nhập mã sản phẩm" />
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              name="productStatus"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Trạng thái
                </p>
              }
            >
              <Input placeholder="Chọn trạng thái sản phẩm" />
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              name="productType"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Loại sản phẩm
                </p>
              }
            >
              <Input placeholder="Chọn loại sản phẩm" />
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              name="brand"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Thương hiệu
                </p>
              }
            >
              <Input placeholder="Chọn thương hiệu" />
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              name="productStart"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Số sao
                </p>
              }
            >
              <Input placeholder="Nhập số sao" />
            </Form.Item>
          </Col>

          <Col xs={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Form.Item>
              <Button type="primary" icon={<SearchOutlined />} htmlType="submit">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
