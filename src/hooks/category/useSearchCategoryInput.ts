import { searchProduct } from '@/services/product/search';
import { GetListProductRequest, ProductEntity } from '@/types/product';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouterCategoryParams } from './useRouterCategoryt';
import { searchCategory } from '@/services/category/search';
import { CategoryEntity, GetListCategoryRequest } from '@/types/category';

export default function useSearchCategoryInput() {
  const { limitParam, pageParam } = useRouterCategoryParams();

  const initRequest: GetListCategoryRequest = {
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 20,
  };

  const [productSearchParam, setProductSearchParam] = useState(initRequest);

  const queryFn = useCallback(() => searchCategory(productSearchParam), [productSearchParam]);

  const requestQuery = useQuery(['categorySearchInput', productSearchParam], queryFn, {
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
    setProductSearchParam,
  };
}
