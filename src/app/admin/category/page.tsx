import BrandFilterComponent from '@/components/brand-admin/brand-list/filter';
import BrandTableComponent from '@/components/brand-admin/brand-list/table';

export default function CategoryPage() {
  return (
    <div>
      <BrandFilterComponent />
      <BrandTableComponent />
    </div>
  );
}
