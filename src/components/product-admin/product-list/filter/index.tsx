'use client';

import useSearchBrandInput from '@/hooks/brand/useSearchBrandInput';
import useSearchCategoryInput from '@/hooks/category/useSearchCategoryInput';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import { ProductFilterFormValue } from './type';
import { SearchProductParams } from '@/types/product';
import { appendQueryStringToUrl } from '@/helper/url';
import { ProductStatusEnum } from '@/enums/product';

export default function ProductFilterComponent() {
  const router = useRouter();

  const { brandList } = useSearchBrandInput();
  const { categoryList } = useSearchCategoryInput();

  const [form] = Form.useForm<ProductFilterFormValue>();

  const handleSubmitFilter = (values: ProductFilterFormValue) => {
    const params: SearchProductParams = {};
    console.log('values', values);
    if (values.brand) {
      params.brandId = values.brand.value;
      params.brandName = values.brand.label;
    }
    if (values.category) {
      params.categoryId = values.category.value;
      params.categoryName = values.category.label;
    }

    if (values.productName) {
      params.productName = values.productName;
    }

    if (values.productCode) {
      params.productCode = values.productCode;
    }

    if (values.productStatus !== undefined) {
      params.productStatus = values.productStatus.toString();
    }

    if (values.productStart) {
      params.productStart = values.productStart.toString();
    }

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
              <Select
                placeholder="Chọn trạng thái"
                optionFilterProp="label"
                allowClear
                options={ProductStatusEnum}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              name="category"
              label={
                <p>
                  <FilterOutlined style={{ marginRight: '10px' }} /> Danh mục
                </p>
              }
            >
              <Select
                labelInValue
                showSearch
                placeholder="Chọn danh mục"
                optionFilterProp="label"
                allowClear
                options={categoryList.map((item) => {
                  return {
                    value: item.id,
                    label: item.categoryName,
                  };
                })}
              />
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
              <Select
                showSearch
                labelInValue
                placeholder="Chọn thương hiệu"
                optionFilterProp="label"
                allowClear
                options={brandList.map((item) => {
                  return {
                    value: item.id,
                    label: item.brandName,
                  };
                })}
              />
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
              <InputNumber placeholder="Nhập số sao" style={{ width: '100%' }} min={1} max={5} />
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
                  router.push('/admin/product');
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
