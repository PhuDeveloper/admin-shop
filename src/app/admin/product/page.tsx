import ProductFilterComponent from '@/components/product-admin/product-list/filter';
import ProductTableComponent from '@/components/product-admin/product-list/table';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ProductPage() {
  return (
    <div className={inter.className}>
      <ProductFilterComponent />
      <ProductTableComponent />
    </div>
  );
}
