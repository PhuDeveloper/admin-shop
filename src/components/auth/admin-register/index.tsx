'use client';

import { Button, Card, Col, Form, Input, Row, Select, Typography } from 'antd';
import { AdminRegisterFormValue } from './type';
import { RegisterRequest } from '@/types/auth';
import { registerUser } from '@/services/auth/register';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function AdminRegisterComponent() {
  const [form] = Form.useForm<AdminRegisterFormValue>();
  const router = useRouter();
  const handleSubmitRegister = (value: AdminRegisterFormValue) => {
    const request: RegisterRequest = {
      address: value.address,
      email: value.email,
      fullName: value.fullName,
      password: value.password,
      phone: value.phone,
      roleId: value.role,
    };

    registerUser(request)
      .then(() => {
        toast.success(`Đăng kí tài khoản thành công`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        router.push('/');
      })
      .catch(() => {
        toast.error(`Đăng kí thất bại`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        form.resetFields();
      });
  };

  return (
    <Row>
      <Col xs={24}>
        <Card
          bordered={false}
          style={{ minHeight: '86vh', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ width: '450px', padding: '30px 0' }}>
            <Title level={4}>Tạo tài khoản </Title>

            <Form
              name="filterProduct"
              layout="vertical"
              form={form}
              wrapperCol={{ span: 24 }}
              onFinish={handleSubmitRegister}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Vui lòng nhập email' }]}
              >
                <Input size="large" style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="fullName"
                label="Họ tên"
                rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="role"
                label="Vai trò"
                rules={[{ required: true, message: 'Vui lòng chọn vai trò' }]}
              >
                <Select
                  size="large"
                  options={[
                    { value: 1, label: 'Admin' },
                    { value: 2, label: 'Khách hàng' },
                  ]}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" size="large" htmlType="submit">
                  Tạo tài khoản
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
