import { useParams, useSearchParams } from 'next/navigation';

export const useRouterBrandParams = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  const { id } = params;

  const brandCodeParam = searchParams.get('brandCode');
  const brandNameParam = searchParams.get('brandName');
  const isDeletedParam = searchParams.get('isDeleted');
  const brandIdParam = searchParams.get('brandId');
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');

  return {
    brandCodeParam,
    brandNameParam,
    isDeletedParam,
    brandIdParam,
    id,
    pageParam,
    limitParam,
  };
};
