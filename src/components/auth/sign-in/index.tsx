'use client';

import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { SignInFormValue } from './type';
import { signInUser } from '@/services/auth/sign-in';
import { SignInUserRequest } from '@/types/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const { Title, Text } = Typography;

export default function SignInComponent() {
  const [form] = Form.useForm<SignInFormValue>();
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
        router.push('/admin/product');
      })
      .catch(() => {
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
      });
  };

  return (
    <Row>
      <Col xs={24} md={8}>
        <div style={{ paddingTop: '20px' }}>
          <img
            src="https://demo.dashboardmarket.com/strikingdash-vue/img/Illustration.54f5c202.png"
            width="100%"
            height="100%"
          />
        </div>
      </Col>
      <Col xs={24} md={16}>
        <Card
          bordered={false}
          style={{ minHeight: '86vh', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ width: '450px', padding: '80px 0' }}>
            <Title level={4}>Sign in to Admin</Title>

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
                  Sign In
                </Button>
              </Form.Item>
              <Text style={{ color: '#5A5F7D', fontWeight: 500 }}>
                Don’t have an account? Sign up now
              </Text>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
