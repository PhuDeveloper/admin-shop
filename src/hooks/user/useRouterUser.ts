import { useParams, useSearchParams } from 'next/navigation';

export const useRouterUserParams = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  const { id } = params;

  const fullNameParam = searchParams.get('fullName');
  const phoneParam = searchParams.get('phone');
  const addressParam = searchParams.get('address');
  const roleParam = searchParams.get('roleId');
  const emailParam = searchParams.get('email');
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');

  return {
    fullNameParam,
    phoneParam,
    addressParam,
    roleParam,
    emailParam,
    id,
    pageParam,
    limitParam,
  };
};
