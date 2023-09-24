'use client';
import { Button, Col, Form, Input, Row } from 'antd';

export default function ProductCreateFormComponent() {
  return (
    <Form name="filterProduct" labelWrap labelAlign="left" labelCol={{ flex: '20%' }}>
      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item name="productName" label={<p>Tên sản phẩm</p>}>
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productCode" label={<p>Mã sản phẩm</p>}>
            <Input placeholder="Nhập mã sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="category" label={<p>Danh mục sản phẩm</p>}>
            <Input placeholder="Chọn danh mục sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="brand" label={<p>Thương hiệu</p>}>
            <Input placeholder="Chọn thương hiệu" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productPriceOrg" label={<p>Giá gốc</p>}>
            <Input placeholder="Nhập giá gốc sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productPriceDiscount" label={<p>Phần trăm giảm</p>}>
            <Input placeholder="Nhập giá gốc sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productDescription" label={<p>Mô tả sản phẩm</p>}>
            <Input placeholder="Nhập mô tả sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="imageUrlList" label={<p>Hình ảnh sản phẩm</p>}>
            <Input placeholder="Hình ảnh" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productStart" label={<p>Số sao</p>}>
            <Input placeholder="Nhập số sao" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="productStatus" label={<p>Trạng thái</p>}>
            <Input placeholder="Chọn trạng thái sản phẩm" />
          </Form.Item>
        </Col>

        <Col xs={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
