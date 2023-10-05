'use client';

import IsDeletedComponent from '@/components/is-deleted';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Space, Table, Tooltip, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataTypeUserList } from './type';
import useSearchBrand from '@/hooks/brand/useSearchBrand';
import ButtonCreateComponent from '@/components/btn-create';
import { useRouterBrandParams } from '@/hooks/brand/useRouterBrandt';
import Link from 'next/link';
import dayjs from 'dayjs';
import useSearchUser from '@/hooks/user/useSearchUser';
import RoleUserComponent from '@/components/role-user';

const { Text } = Typography;

export default function UserTableComponent() {
  const { userList, requestQuery } = useSearchUser();
  const { pageParam } = useRouterBrandParams();
  const numberStartToCount = ((pageParam ? Number(pageParam) : 1) - 1) * 20;

  const columns: ColumnsType<DataTypeUserList> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: '8%',
      align: 'center',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'fullName',
      key: 'fullName',
      align: 'center',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
    },
    {
      title: 'Vai trò',
      dataIndex: 'role',
      key: 'role',
      align: 'center',
    },
    {
      title: 'Thao tác',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
    },
  ];

  const data: DataTypeUserList[] = userList.map((item, index) => {
    return {
      key: item.id.toString(),
      stt: <div>{numberStartToCount + index + 1}</div>,
      fullName: (
        <div>
          <Text style={{ fontWeight: 550 }}>{item?.fullName} </Text>
        </div>
      ),
      email: (
        <div>
          <Text>{item.email}</Text>
        </div>
      ),
      phone: (
        <div>
          <Text>{item.phone}</Text>
        </div>
      ),
      address: (
        <div>
          <Text>{item.address}</Text>
        </div>
      ),
      role: (
        <div>
          <RoleUserComponent role={item.role?.id} />
        </div>
      ),
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa tài khoản">
            <Link href={`/admin/user/${item?.id}`}>
              <Button type="link" icon={<FontAwesomeIcon icon={faPenToSquare} />} />
            </Link>
          </Tooltip>
        </Space>
      ),
    };
  });

  return (
    <Card
      style={{
        margin: '10px',
        borderRadius: '15px',
      }}
    >
      <Table
        style={{ borderRadius: '10px' }}
        columns={columns}
        loading={requestQuery.status === 'loading'}
        dataSource={data}
        title={() => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3>Danh sách người dùng</h3>
            <ButtonCreateComponent title="Tạo người dùng" url="/admin/user/create" />
          </div>
        )}
      />
    </Card>
  );
}
