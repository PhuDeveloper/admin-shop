import { searchCategory } from '@/services/category/search';
import { CategoryEntity, GetListCategoryRequest } from '@/types/category';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouterCategoryParams } from './useRouterCategoryt';

export default function useSearchCategory() {
  const { categoryIdParam, isDeletedParam, categoryNameParam, limitParam, pageParam } =
    useRouterCategoryParams();

  const initRequest: GetListCategoryRequest = {
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 20,
  };

  const [categorySearchParam, setCategorySearchParam] = useState(initRequest);

  useEffect(() => {
    const request: GetListCategoryRequest = {
      page: pageParam ? Number(pageParam) : 1,
      limit: limitParam ? Number(limitParam) : 20,
    };

    if (categoryIdParam) {
      request.categoryId = Number(categoryIdParam);
    }

    if (isDeletedParam) {
      request.isDeleted = Number(isDeletedParam);
    }

    if (categoryNameParam) {
      request.categoryName = categoryNameParam;
    }

    setCategorySearchParam(request);
  }, [categoryIdParam, isDeletedParam, categoryNameParam, limitParam, pageParam]);

  const queryFn = useCallback(() => searchCategory(categorySearchParam), [categorySearchParam]);

  const requestQuery = useQuery(['categorySearch', categorySearchParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
  });

  const { data } = requestQuery;

  const categoryList = useMemo<CategoryEntity[]>(() => {
    if (!data?.payload) return [];
    return data?.payload?.category_list;
  }, [data?.payload?.category_list]);

  return {
    categoryList,
    requestQuery,
    setCategorySearchParam,
  };
}
