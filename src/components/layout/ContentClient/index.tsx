'use client';

import { Layout } from 'antd';

const { Content } = Layout;

export default function ContentClientComponent({ children }: { children: React.ReactNode }) {
  const contentStyle: React.CSSProperties = {
    minHeight: '87vh',
    backgroundColor: 'white',
  };

  return <Content style={contentStyle}>{children}</Content>;
}
