import OrdersFilterComponent from '@/components/order-admin/order-list/filter';
import OrdersTableComponent from '@/components/order-admin/order-list/table';

export default function OrdersPage() {
  return (
    <div>
      <OrdersFilterComponent />
      <OrdersTableComponent />
    </div>
  );
}
