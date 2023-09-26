import CategoryUpdateFormComponent from '@/components/category-admin/category-update';
import { Card } from 'antd';

export default function CategoryDetailPage() {
  return (
    <Card bordered={false} style={{ margin: '10px' }} title="Cập nhật thương hiệu">
      <CategoryUpdateFormComponent />
    </Card>
  );
}
