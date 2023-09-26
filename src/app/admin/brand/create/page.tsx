import BrandCreateFormComponent from '@/components/brand-admin/brand-create';
import { Card } from 'antd';

export default function CreateBrandPage() {
  return (
    <Card bordered={false} style={{ margin: '10px' }} title="Tạo thương hiệu">
      <BrandCreateFormComponent />
    </Card>
  );
}
