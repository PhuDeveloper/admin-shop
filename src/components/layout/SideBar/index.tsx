'use client';

import { Menus } from '@/configs/menu';
import { Layout, Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
const { Sider } = Layout;

export default function AdminSideBarComponent() {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sider
      width={250}
      collapsible
      collapsed={collapsed}
      theme="light"
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[pathname]}
        defaultOpenKeys={pathname.split('/')}
        items={Menus}
        style={{
          width: '100%',
          height: '100%',
          borderRight: 0,
          color: '#272B41',
          paddingTop: '10px',
        }}
        onClick={(e) => {
          router.push(e.key);
        }}
      />
    </Sider>
  );
}
