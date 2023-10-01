'use client';
import { BrandIsDeletedEnum } from '@/enums/brand';
import { createBrand } from '@/services/brand/create';
import { CreateBrandRequest } from '@/types/brand';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { CreateBrandFormValue } from './type';

const TextEditorComponent = dynamic(
  () => import('../../../components/text-editor').then((mod) => mod.TextEditorComponent),
  {
    ssr: false,
  },
);

export default function BrandCreateFormComponent() {
  const router = useRouter();

  const [valueEditor, setValueEditor] = useState<string>('');

  const [form] = Form.useForm<CreateBrandFormValue>();
  const handleCreateBrand = (value: CreateBrandFormValue) => {
    const request: CreateBrandRequest = {
      brandCode: value.brandCode,
      brandName: value.brandName,
      brandDescription: valueEditor,
    };

    createBrand(request)
      .then((res) => {
        if (res.statusCode !== 200) {
          toast.error(`Tạo thương hiệu thất bại`, {
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

        toast.success(`Tạo thương hiệu thành công`, {
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
      onFinish={handleCreateBrand}
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
            <Input placeholder="Nhập mã thương hiệu" />
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
            <Select placeholder="Chọn trạng thái" allowClear options={BrandIsDeletedEnum} />
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
