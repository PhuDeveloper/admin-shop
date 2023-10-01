import ProductFilterComponent from '@/components/product-admin/product-list/filter';
import ProductTableComponent from '@/components/product-admin/product-list/table';

export default function ProductPage() {
  return (
    <div>
      <ProductFilterComponent />
      <ProductTableComponent />
    </div>
  );
}
