'use client';

import { Layout } from 'antd';

const { Footer } = Layout;

export default function AdminFooterComponent() {
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#9299B8',
    backgroundColor: '#fff',
  };

  return <Footer style={footerStyle}>Shop store ©2023 Created by Ant UED</Footer>;
}
