import AdminUpdateUserComponent from '@/components/user-admin/user-update';
import { Card } from 'antd';

export default function BrandDetailPage() {
  return (
    <Card bordered={false} style={{ margin: '10px' }} title="Cập nhật người dùng">
      <AdminUpdateUserComponent />
    </Card>
  );
}
