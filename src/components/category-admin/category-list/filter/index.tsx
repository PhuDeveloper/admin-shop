'use client';

import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { useRouter } from 'next/navigation';

export default function CategoryFilterComponent() {
  const router = useRouter();
  return (
    <Card
      style={{
        margin: '10px',
        borderRadius: '15px',
      }}
      title={<h4> Bộ lọc</h4>}
    >
      <Form name="filterCategory" labelWrap labelAlign="left" labelCol={{ flex: '30%' }}>
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <Form.Item
              name="categoryName"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Tên danh mục
                </p>
              }
            >
              <Input placeholder="Nhập tên danh mục" />
            </Form.Item>
          </Col>

          <Col xs={24} lg={12}>
            <Form.Item
              name="productStatus"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Trạng thái
                </p>
              }
            >
              <Input placeholder="Chọn trạng thái sanh mục" />
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
                  router.push('/admin/category');
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
