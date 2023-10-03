'use client';

import { Button, Card, Tooltip } from 'antd';
import StatusComponent from '../status';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';

export default function ItemProductComponent() {
  //   const { product } = props;

  return (
    <Card
      style={{ width: 280 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <h5>
        Loa bluetooth mini MINPRO A005 không dây giá rẻ đèn led theo nhạc bluetooth 5.0 chính hãng
      </h5>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ paddingTop: '25px' }}>
            <p style={{ color: 'rgb(235, 62, 62)', fontWeight: 550, fontSize: '16px' }}>
              8,0000,000 đ
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', paddingTop: '5px' }}>
            <p
              style={{
                color: 'rgb(35, 35, 43)',
                fontSize: '10px',
                fontWeight: 550,
                backgroundColor: '#ffd600',
                width: '30px',
                textAlign: 'center',
                padding: '2px 0',
                borderRadius: '5px',
              }}
            >
              30%
            </p>

            <span
              style={{ fontSize: '13px', marginLeft: '3px', textDecorationLine: 'line-through' }}
            >
              10,000,000 đ
            </span>
          </div>
        </div>
        <div>
          <Tooltip title="Thêm vào giỏ hàng">
            <Button
              type="link"
              icon={<FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '20px' }} />}
            />
          </Tooltip>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '8px',
          alignItems: 'center',
        }}
      >
        <div>
          <span>
            <FontAwesomeIcon icon={faStar} style={{ color: '#ffd600' }} />
          </span>
          <span style={{ paddingLeft: '5px' }}>5</span>
        </div>
        <div>
          <StatusComponent status={0} />
        </div>
      </div>
    </Card>
  );
}
