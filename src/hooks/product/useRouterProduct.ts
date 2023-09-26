import { useParams, useSearchParams } from 'next/navigation';

export const useRouterProductParams = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  const { id } = params;

  const productCodeParam = searchParams.get('productCode');
  const productNameParam = searchParams.get('productName');
  const productStatusParam = searchParams.get('productStatus');
  const productStartParam = searchParams.get('productStart');
  const isDeletedParam = searchParams.get('isDeleted');
  const brandIdParam = searchParams.get('brandId');
  const categoryIdParam = searchParams.get('categoryId');
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');

  return {
    productCodeParam,
    productNameParam,
    productStartParam,
    productStatusParam,
    isDeletedParam,
    brandIdParam,
    categoryIdParam,
    id,
    pageParam,
    limitParam,
  };
};
