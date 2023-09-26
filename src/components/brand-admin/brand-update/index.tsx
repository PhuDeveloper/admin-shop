'use client';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UpdateBrandFormValue } from './type';

import TextEditorComponent from '@/components/text-editor';
import { BrandIsDeletedEnum } from '@/enums/brand';
import useGetDetailBrand from '@/hooks/brand/useGetDetailBrandt';
import { updateBrand } from '@/services/brand/update';
import { UpdateBrandRequest } from '@/types/brand';
import { toast } from 'react-toastify';
import { useRouterBrandParams } from '@/hooks/brand/useRouterBrandt';

export default function BrandUpdateFormComponent() {
  const router = useRouter();

  const { brandDetail } = useGetDetailBrand();

  const { id } = useRouterBrandParams();

  const [valueEditor, setValueEditor] = useState<string>('');

  const [form] = Form.useForm<UpdateBrandFormValue>();

  useEffect(() => {
    setValueEditor(brandDetail?.brandDescription ?? '');
    form.setFieldsValue({
      brandCode: brandDetail?.brandCode ?? '',
      brandName: brandDetail?.brandName ?? '',
      isDeleted: brandDetail?.isDeleted ?? 0,
    });
  }, [brandDetail]);

  const handleUpdateBrand = (value: UpdateBrandFormValue) => {
    const request: UpdateBrandRequest = {
      brandId: Number(id),
      data: {
        brandName: value.brandName,
        isDeleted: value.isDeleted,
        brandDescription: valueEditor,
      },
    };

    updateBrand(request)
      .then((res) => {
        if (res.statusCode !== 200) {
          toast.error(`Cập nhật thương hiệu thất bại`, {
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

        toast.success(`Cập nhật thương hiệu thành công`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        router.push('/admin/brand');
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
            name="brandName"
            label={<p>Tên thương hiệu</p>}
            rules={[{ required: true, message: 'Vui lòng nhập tên thương hiệu' }]}
          >
            <Input placeholder="Nhập tên thương hiệu" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            name="brandCode"
            label={<p>Mã thương hiệu</p>}
            rules={[{ required: true, message: 'Vui lòng nhập mã thương hiệu' }]}
          >
            <Input placeholder="Nhập mã thương hiệu" readOnly />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="brandDescription" label={<p>Mô tả thương hiệu</p>}>
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
                router.push('/admin/brand');
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
