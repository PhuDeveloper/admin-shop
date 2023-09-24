import BrandFilterComponent from '@/components/brand-admin/brand-list/filter';
import BrandTableComponent from '@/components/brand-admin/brand-list/table';

export default function BrandPage() {
  return (
    <div>
      <BrandFilterComponent />
      <BrandTableComponent />
    </div>
  );
}
