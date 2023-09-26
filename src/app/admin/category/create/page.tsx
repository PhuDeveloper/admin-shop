import CategoryCreateFormComponent from '@/components/category-admin/category-create';
import { Card } from 'antd';

export default function CreateCategoryPage() {
  return (
    <Card bordered={false} style={{ margin: '10px' }} title="Tạo danh mục">
      <CategoryCreateFormComponent />
    </Card>
  );
}
