'use client';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CreateCategoryFormValue } from './type';

import TextEditorComponent from '@/components/text-editor';
import { BrandIsDeletedEnum } from '@/enums/brand';
import { createBrand } from '@/services/brand/create';
import { CreateBrandRequest } from '@/types/brand';
import { toast } from 'react-toastify';
import { createCategory } from '@/services/category/create';
import { CreateCategoryRequest } from '@/types/category';

export default function CategoryCreateFormComponent() {
  const router = useRouter();

  const [valueEditor, setValueEditor] = useState<string>('');

  const [form] = Form.useForm<CreateCategoryFormValue>();
  const handleCreateBrand = (value: CreateCategoryFormValue) => {
    const request: CreateCategoryRequest = {
      categoryName: value.categoryName,
      categoryDescription: valueEditor,
      isDeleted: value.isDeleted,
    };

    createCategory(request)
      .then((res) => {
        if (res.statusCode !== 200) {
          toast.error(`Tạo danh mục thất bại`, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          return;
        }

        toast.success(`Tạo danh mục thành công`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        router.push('/admin/category');
      })
      .catch((error) => {
        toast.error(`Có lỗi xảy ra`, {
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

  return (
    <Form
      name="filterProduct"
      labelWrap
      labelAlign="left"
      labelCol={{ flex: '20%' }}
      onFinish={handleCreateBrand}
      form={form}
    >
      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item
            name="categoryName"
            label={<p>Tên danh mục</p>}
            rules={[{ required: true, message: 'Vui lòng nhập tên danh mục' }]}
          >
            <Input placeholder="Nhập tên danh mục" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="categoryDescription" label={<p>Mô tả danh mục</p>}>
            <TextEditorComponent valueEditor={valueEditor} setValueEditor={setValueEditor} />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            name="isDeleted"
            label={<p>Trạng thái</p>}
            rules={[{ required: true, message: 'Vui lòng chọn trạng thái' }]}
          >
            <Select
              placeholder="Chọn trạng thái"
              optionFilterProp="label"
              allowClear
              options={BrandIsDeletedEnum}
            />
          </Form.Item>
        </Col>

        <Col xs={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo
            </Button>
            <Button
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
  );
}
