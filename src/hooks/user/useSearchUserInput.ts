import { searchUser } from '@/services/user/search';
import { GetListUserRequest, UsersEntity } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';
import { useRouterUserParams } from './useRouterUser';

export default function useSearchUserInput() {
  const { limitParam, pageParam } = useRouterUserParams();

  const initRequest: GetListUserRequest = {
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 20,
  };

  const [userSearchParam, setUserSearchParam] = useState(initRequest);

  const queryFn = useCallback(() => searchUser(userSearchParam), [userSearchParam]);

  const requestQuery = useQuery(['userSearchInput', userSearchParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
  });

  const { data } = requestQuery;

  const userList = useMemo<UsersEntity[]>(() => {
    if (!data?.payload?.user_list) return [];

    return data?.payload?.user_list;
  }, [data?.payload?.user_list]);

  return {
    userList,
    requestQuery,
    setUserSearchParam,
  };
}
