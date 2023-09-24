import ProductCreateFormComponent from '@/components/product-admin/product-create';
import { Card } from 'antd';

export default function CreateProductPage() {
  return (
    <Card bordered={false} style={{ margin: '10px' }}>
      <ProductCreateFormComponent />
    </Card>
  );
}
