'use client';

import { faShop } from '@fortawesome/free-solid-svg-icons/faShop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'antd';

const { Header } = Layout;

export default function HeaderAuthComponent() {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#fff',
    boxShadow: ' rgb(38, 57, 77) 0px 20px 30px -10px',
    borderBottom: '1px solid rgb(244, 245, 247)',
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
    </Header>
  );
}
