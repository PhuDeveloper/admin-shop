import { MenuType } from '@/types/menu-type';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menus: MenuType[] = [
  {
    key: 'product',
    label: 'Quản lý sản phẩm',
    icon: <FontAwesomeIcon icon={faProductHunt} />,
    children: [
      {
        key: '/admin/product',
        label: 'Danh sách sản phẩm',
        title: '/admin/product',
      },
      {
        key: '/admin/product/create',
        label: 'Thêm mới sản phẩm',
        title: '/admin/product/create',
      },
    ],
  },
  {
    key: 'brand',
    label: 'Quản lý thương hiệu',
    icon: <FontAwesomeIcon icon={faDatabase} />,
    children: [
      {
        key: '/admin/brand',
        label: 'Danh sách thương hiệu',
        title: '/admin/brand',
      },
      {
        key: '/admin/brand/create',
        label: 'Thêm mới thương hiệu',
        title: '/admin/brand/create',
      },
    ],
  },
  {
    key: 'category',
    label: 'Quản lý danh mục',
    icon: <FontAwesomeIcon icon={faBook} />,
    children: [
      {
        key: '/admin/category',
        label: 'Danh sách danh mục',
        title: '/admin/category',
      },
      {
        key: '/admin/category/create',
        label: 'Thêm mới danh mục',
        title: '/admin/category/create',
      },
    ],
  },
  {
    key: 'orders',
    label: 'Quản lý đơn hàng',
    icon: <FontAwesomeIcon icon={faClipboard} />,
    children: [
      {
        key: '/admin/orders',
        label: 'Danh sách đơn hàng',
        title: '/admin/orders',
      },
      {
        key: '/admin/orders/create',
        label: 'Thêm mới đơn hàng',
        title: '/admin/orders/create',
      },
    ],
  },
];
