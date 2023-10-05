'use client';

import useGetListCart from '@/hooks/cart/useGetListCart';
import { Avatar, Checkbox, List } from 'antd';

export default function GetListProductByCartComponent() {
  const { productList } = useGetListCart();
  const plainOptions = ['Apple', 'Pear', 'Orange'];

  return (
    <List
      header={<h4>Giỏ hàng của bạn</h4>}
      dataSource={productList}
      renderItem={(item) => {
        return (
          <List.Item>
            <div>
              <Checkbox onChange={() => {}} />
            </div>

            <List.Item.Meta
              avatar={<Avatar size={60} src={item.imageUrl} />}
              title={`# ${item.productCode}`}
              description={item.productName}
            />
            <div>{item.productPriceOrg}</div>
          </List.Item>
        );
      }}
    />
  );
}
