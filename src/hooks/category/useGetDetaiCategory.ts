import { getDetailCategory } from '@/services/category/get';
import { CategoryEntity, GetDetailCategoryRequest } from '@/types/category';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';
import { useRouterCategoryParams } from './useRouterCategoryt';

export default function useGetDetailCategory() {
  const { id } = useRouterCategoryParams();

  const initReq: GetDetailCategoryRequest = {
    categoryId: Number(id as string),
  };
  const [categoryGetDetailParam, setCategoryGetDetailParam] =
    useState<GetDetailCategoryRequest>(initReq);

  const queryFn = useCallback(
    () => getDetailCategory(categoryGetDetailParam),
    [categoryGetDetailParam],
  );

  const requestQuery = useQuery(['categoryGetDetail', categoryGetDetailParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
    cacheTime: 0,
  });

  const { data } = requestQuery;

  const categoryDetail = useMemo<CategoryEntity | undefined>(() => {
    return data?.payload;
  }, [data?.payload]);

  return { categoryDetail, requestQuery, setCategoryGetDetailParam };
}
