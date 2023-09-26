import CategoryFilterComponent from '@/components/category-admin/category-list/filter';
import CategoryTableComponent from '@/components/category-admin/category-list/table';

export default function CategoryPage() {
  return (
    <div>
      <CategoryFilterComponent />
      <CategoryTableComponent />
    </div>
  );
}
