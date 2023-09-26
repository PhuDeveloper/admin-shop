'use client';

import IsDeletedComponent from '@/components/is-deleted';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Space, Table, Tooltip, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataTypeBrandList } from './type';
import useSearchBrand from '@/hooks/brand/useSearchBrand';
import ButtonCreateComponent from '@/components/btn-create';
import { useRouterBrandParams } from '@/hooks/brand/useRouterBrandt';
import Link from 'next/link';
import dayjs from 'dayjs';
import useSearchCategory from '@/hooks/category/useSearchCategory';

const { Text } = Typography;

export default function CategoryTableComponent() {
  const { categoryList, requestQuery } = useSearchCategory();
  const { pageParam } = useRouterBrandParams();
  const numberStartToCount = ((pageParam ? Number(pageParam) : 1) - 1) * 20;

  const columns: ColumnsType<DataTypeBrandList> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: '8%',
      align: 'center',
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      align: 'center',
      width: '30%',
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'created',
      key: 'created',
      align: 'center',
      width: '20%',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'isDeleted',
      key: 'isDeleted',
      align: 'center',
      width: '20%',
    },
    {
      title: 'Thao tác',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: '20%',
    },
  ];

  const data: DataTypeBrandList[] = categoryList.map((item, index) => {
    return {
      key: item.id.toString(),
      stt: <div>{numberStartToCount + index + 1}</div>,
      category: (
        <div>
          <Text style={{ fontWeight: 550 }}>{item?.categoryName} </Text>
        </div>
      ),
      created: (
        <div>
          <Text>
            {item?.categoryCreated ? dayjs(item?.categoryCreated * 1000).format('DD/MM/YYYY') : ''}
          </Text>
        </div>
      ),
      isDeleted: <IsDeletedComponent isDeleted={item?.isDeleted ?? 0} />,
      action: (
        <Space size="large">
          <Tooltip title="Chỉnh sửa danh mục">
            <Link href={`/admin/category/${item?.id}`}>
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
        dataSource={data}
        loading={requestQuery.status === 'loading'}
        title={() => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3>Danh sách thương hiệu</h3>
            <ButtonCreateComponent title="Tạo thương hiệu" url="/admin/brand/create" />
          </div>
        )}
      />
    </Card>
  );
}
