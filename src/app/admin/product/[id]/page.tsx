import ProductUpdateFormComponent from '@/components/product-admin/product-update';
import { Card } from 'antd';

export default function ProductDetailPage() {
  return (
    <Card bordered={false} style={{ margin: '10px' }} title="Cập nhật sản phẩm">
      <ProductUpdateFormComponent />
    </Card>
  );
}
