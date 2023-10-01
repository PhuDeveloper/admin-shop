import { useParams, useSearchParams } from 'next/navigation';

export const useRouterOrdersParams = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  const { id } = params;

  const userIdParam = searchParams.get('userId');
  const statusParam = searchParams.get('status');
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');

  return {
    userIdParam,
    statusParam,
    id,
    pageParam,
    limitParam,
  };
};
