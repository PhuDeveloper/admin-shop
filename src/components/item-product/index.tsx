'use client';

import { Button, Card, Tooltip } from 'antd';
import StatusComponent from '../status';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { ItemProductProps } from './type';
import { ProductEntity } from '@/types/product';
import { addProductToCart } from '@/services/cart/add-product';
import { toast } from 'react-toastify';

export default function ItemProductComponent(props: ItemProductProps) {
  const { product } = props;

  const handleAddProductToCart = (product: ProductEntity) => {
    addProductToCart({ productId: [product.id] })
      .then(() => {
        toast.success(`Thêm giỏ hàng thành công`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      })
      .catch(() => {
        toast.error(`Thêm giỏ hàng thất bại`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  };

  return (
    <Card
      style={{ width: 270, margin: '10px', flexGrow: 1 }}
      cover={<img alt="example" src={product.imageUrl} height={270} width={'100%'} />}
    >
      <h5>{product.productName}</h5>

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
              onClick={() => handleAddProductToCart(product)}
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
