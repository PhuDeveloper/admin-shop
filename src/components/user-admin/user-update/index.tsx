'use client';

import useGetDetailUser from '@/hooks/user/useGetDetailUser';
import { useRouterUserParams } from '@/hooks/user/useRouterUser';
import { updateUser } from '@/services/user/update';
import { UpdateUserRequest } from '@/types/user';
import { Button, Card, Col, Form, Input, Result, Row, Select, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AdminUpdateUserFormValue } from './type';
import { useEffect } from 'react';

const { Title } = Typography;

export default function AdminUpdateUserComponent() {
  const [form] = Form.useForm<AdminUpdateUserFormValue>();
  const router = useRouter();

  const { userDetail } = useGetDetailUser();

  const { id } = useRouterUserParams();

  useEffect(() => {
    form.setFieldsValue({
      address: userDetail?.address ?? '',
      email: userDetail?.email ?? '',
      phone: userDetail?.phone,
      role: userDetail?.role?.id,
      fullName: userDetail?.fullName,
    });
  }, [userDetail]);

  const handleSubmitRegister = (value: AdminUpdateUserFormValue) => {
    const request: UpdateUserRequest = {
      userId: Number(id),
      data: {
        address: value.address,
        fullName: value.fullName,
        phone: value.phone,
        role: value.role,
      },
    };

    updateUser(request)
      .then(() => {
        toast.success(`Cập nhật tài khoản thành công`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        router.push('/admin/user');
      })
      .catch(() => {
        toast.error(`Cập nhật tài khoản thất bại`, {
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

  if (!userDetail) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Không tìm thấy dữ liệu bạn yêu cầu"
        extra={
          <Button
            type="primary"
            onClick={() => {
              router.push('/admin/user');
            }}
          >
            Quay về
          </Button>
        }
      />
    );
  }

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
                <Input size="large" style={{ width: '100%' }} disabled />
              </Form.Item>

              {/* <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
              >
                <Input size="large" />
              </Form.Item> */}

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
                  Cập nhật thông tin
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
