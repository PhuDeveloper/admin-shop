import { getDetailUser } from '@/services/user/get';
import { GetDetailUserRequest, UsersEntity } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';
import { useRouterUserParams } from './useRouterUser';

export default function useGetDetailUser() {
  const { id } = useRouterUserParams();

  const initReq: GetDetailUserRequest = {
    userId: Number(id as string),
  };
  const [userGetDetailParam, setUserGetDetailParam] = useState<GetDetailUserRequest>(initReq);

  const queryFn = useCallback(() => getDetailUser(userGetDetailParam), [userGetDetailParam]);

  const requestQuery = useQuery(['userGetDetail', userGetDetailParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
    cacheTime: 0,
  });

  const { data } = requestQuery;

  const userDetail = useMemo<UsersEntity | undefined>(() => {
    return data?.payload;
  }, [data?.payload]);

  return { userDetail, requestQuery, setUserGetDetailParam };
}
