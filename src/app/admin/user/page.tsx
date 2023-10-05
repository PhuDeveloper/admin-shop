import AdminRegisterComponent from '@/components/auth/admin-register';
import UserFilterComponent from '@/components/user-admin/user-list/filter';
import UserTableComponent from '@/components/user-admin/user-list/table';

export default function UserPage() {
  return (
    <div>
      <UserFilterComponent />
      <UserTableComponent />
    </div>
  );
}
