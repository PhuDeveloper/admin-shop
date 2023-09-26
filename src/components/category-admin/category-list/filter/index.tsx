'use client';

import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import { CategoryFilterFormValue } from './type';
import { BrandIsDeletedEnum } from '@/enums/brand';
import { SearchCategoryParams } from '@/types/category';
import { appendQueryStringToUrl } from '@/helper/url';

export default function CategoryFilterComponent() {
  const router = useRouter();

  const [form] = Form.useForm<CategoryFilterFormValue>();

  const handleSubmitFilter = (values: CategoryFilterFormValue) => {
    const params: SearchCategoryParams = {};
    params.categoryName =
      values?.categoryName && values?.categoryName.length > 0 ? values?.categoryName : undefined;

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
        name="filterCategory"
        labelWrap
        labelAlign="left"
        labelCol={{ flex: '30%' }}
        form={form}
        onFinish={handleSubmitFilter}
      >
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
