'use client';

import { signInUser } from '@/services/auth/sign-in';
import { SignInUserRequest } from '@/types/auth';
import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { SignInFormValue } from './type';
import { useAppDispatch } from '@/store/hooks';
import { useReducer } from 'react';
import { updateRoleUser } from '@/store/user/userSlice';

const { Title, Text } = Typography;

export default function SignInComponent() {
  const [form] = Form.useForm<SignInFormValue>();

  // const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSubmitSignIn = (values: SignInFormValue) => {
    const request: SignInUserRequest = {
      email: values.email,
      password: values.password,
    };

    signInUser(request)
      .then((res) => {
        if (res.statusCode !== 200 || !res.payload?.accessToken) {
          toast.error(`Đăng nhập thất bại`, {
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

        toast.success(`Đăng nhập thành công`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        Cookies.set('token', res.payload?.accessToken);
        if (res.payload?.roleName === 'admin') {
          // dispatch(updateRoleUser({role:res.payload.}));
          router.push('/admin/product');
        }
        if (res.payload?.roleName === 'customer') {
          router.push('/customer');
        }
      })
      .catch((err: any) => {
        if (!err.response) {
          toast.error(`Server không hoạt động. Vui lòng thử lại sau!!!`, {
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
        toast.error(`${err.response?.data?.message}`, {
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
      });
  };

  return (
    <Row>
      <Col xs={24} md={8}>
        <div style={{ paddingTop: '20px' }}>
          <img src="./authBackground.png" width="100%" height="100%" />
        </div>
      </Col>
      <Col xs={24} md={16}>
        <Card
          bordered={false}
          style={{ minHeight: '86vh', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ width: '450px', padding: '80px 0' }}>
            <Title level={4}>Đăng nhập </Title>

            <Form
              name="filterProduct"
              layout="vertical"
              form={form}
              wrapperCol={{ span: 24 }}
              onFinish={handleSubmitSignIn}
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
                label="Password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" size="large" htmlType="submit">
                  Đăng nhập
                </Button>
              </Form.Item>
              <Text style={{ color: '#5A5F7D', fontWeight: 500 }}>
                Don’t have an account? <Link href="/auth/register">Sign up now</Link>
              </Text>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
