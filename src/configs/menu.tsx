import { MenuType } from '@/types/menu-type';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menus: MenuType[] = [
  {
    key: '1',
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
    key: '2',
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
    key: '3',
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
];
