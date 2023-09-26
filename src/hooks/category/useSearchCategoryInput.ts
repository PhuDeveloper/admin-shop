import { searchCategory } from '@/services/category/search';
import { CategoryEntity, GetListCategoryRequest } from '@/types/category';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';

export default function useSearchCategoryInput() {
  const initRequest: GetListCategoryRequest = {
    page: 1,
    limit: 20,
  };

  const [categorySearchParam, setCategorySearchParam] = useState(initRequest);

  const queryFn = useCallback(() => searchCategory(categorySearchParam), [categorySearchParam]);

  const requestQuery = useQuery(['categorySearchInput', categorySearchParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
  });

  const { data } = requestQuery;

  const categoryList = useMemo<CategoryEntity[]>(() => {
    if (!data?.payload?.category_list) return [];

    return data?.payload?.category_list;
  }, [data?.payload?.category_list]);

  return {
    categoryList,
    requestQuery,
    setCategorySearchParam,
  };
}
