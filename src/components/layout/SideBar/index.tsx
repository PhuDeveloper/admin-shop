'use client';

import { Menus } from '@/configs/menu';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';

const { Sider } = Layout;

export default function AdminSideBarComponent() {
  const router = useRouter();

  return (
    <Sider width={250}>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['/admin/product']}
        defaultOpenKeys={['1']}
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
