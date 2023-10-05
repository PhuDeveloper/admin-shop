'use client';

import useGetListCart from '@/hooks/cart/useGetListCart';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons/faShop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Layout } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

export default function HeaderClientComponent() {
  const { productList } = useGetListCart();
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#fff',
    boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    borderBottom: '1px solid rgb(244, 245, 247)',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
  };

  return (
    <Header style={headerStyle}>
      <div
        style={{
          fontSize: '23px',
          color: '#272b41',
        }}
      >
        <FontAwesomeIcon icon={faShop} style={{ color: '#4347D9', marginRight: '5px' }} />
        SHOP ONLINE
      </div>

      <nav>
        <ul
          style={{
            display: 'flex',
            fontSize: '16px',
          }}
        >
          <li style={{ padding: '5px 20px' }}>
            <Link href="/customer">Trang chủ</Link>
          </li>
          <li style={{ padding: '5px 20px' }}>
            <Link href="/customer/product">Sản phẩm</Link>
          </li>{' '}
          <li style={{ padding: '5px 20px' }}>
            <Link href="/customer/blog">Blog</Link>
          </li>{' '}
          <li style={{ padding: '5px 20px' }}>
            <Link href="/customer/feedback">Góp ý</Link>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '15px' }}>
          <Badge count={productList?.length ?? 0} size="small">
            <Link href="/customer/cart">
              <Button
                type="link"
                icon={
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: '#272b41', fontSize: '16px' }}
                  />
                }
              />
            </Link>
          </Badge>
        </div>
        <div>
          <Button
            type="link"
            icon={<FontAwesomeIcon icon={faUser} style={{ color: '#272b41', fontSize: '16px' }} />}
          />
        </div>
      </div>
    </Header>
  );
}
