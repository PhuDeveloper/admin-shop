'use client';

import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UpdateCategoryFormValue } from './type';

import TextEditorComponent from '@/components/text-editor';
import { BrandIsDeletedEnum } from '@/enums/brand';
import useGetDetailCategory from '@/hooks/category/useGetDetaiCategory';
import { useRouterCategoryParams } from '@/hooks/category/useRouterCategoryt';
import { updateCategory } from '@/services/category/update';
import { UpdateCategoryRequest } from '@/types/category';
import { toast } from 'react-toastify';

export default function CategoryUpdateFormComponent() {
  const router = useRouter();

  const { categoryDetail } = useGetDetailCategory();

  const { id } = useRouterCategoryParams();

  const [valueEditor, setValueEditor] = useState<string>('');

  const [form] = Form.useForm<UpdateCategoryFormValue>();

  useEffect(() => {
    setValueEditor(categoryDetail?.categoryDescription ?? '');
    form.setFieldsValue({
      categoryName: categoryDetail?.categoryName ?? '',
      isDeleted: categoryDetail?.isDeleted ?? 0,
    });
  }, [categoryDetail]);

  const handleUpdateBrand = (value: UpdateCategoryFormValue) => {
    const request: UpdateCategoryRequest = {
      categoryId: Number(id),
      data: {
        categoryName: value.categoryName,
        isDeleted: value.isDeleted,
        categoryDescription: valueEditor,
      },
    };

    updateCategory(request)
      .then((res) => {
        if (res.statusCode !== 200) {
          toast.error(`Cập nhật danh mục thất bại`, {
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

        toast.success(`Cập nhật danh mục thành công`, {
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
      onFinish={handleUpdateBrand}
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
          <Form.Item name="brandDescription" label={<p>Mô tả danh mục</p>}>
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
              Cập nhật
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
