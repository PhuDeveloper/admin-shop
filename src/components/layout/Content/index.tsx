'use client';

import { Layout } from 'antd';

const { Content } = Layout;

export default function ContentComponent({ children }: { children: React.ReactNode }) {
  const contentStyle: React.CSSProperties = {
    minHeight: '86vh',
    backgroundColor: 'rgb(244, 245, 247)',
  };

  return <Content style={contentStyle}>{children}</Content>;
}
