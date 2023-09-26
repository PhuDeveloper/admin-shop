import { useParams, useSearchParams } from 'next/navigation';

export const useRouterCategoryParams = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  const { id } = params;

  const categoryNameParam = searchParams.get('categoryName');
  const isDeletedParam = searchParams.get('isDeleted');
  const categoryIdParam = searchParams.get('categoryId');
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');

  return {
    categoryNameParam,
    isDeletedParam,
    categoryIdParam,
    id,
    pageParam,
    limitParam,
  };
};
