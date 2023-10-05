import BrandUpdateFormComponent from '@/components/brand-admin/brand-update';
import { Card } from 'antd';

export default function BrandDetailPage() {
  return (
    <Card bordered={false} style={{ margin: '10px' }} title="Cập nhật người dùng">
      <BrandUpdateFormComponent />
    </Card>
  );
}
