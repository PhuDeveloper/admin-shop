import { getDetailProduct } from '@/services/product/get';
import { GetDetailCategoryRequest } from '@/types/category';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useRouterCategoryParams } from './useRouterCategoryt';

export default function useGetDetailProduct() {
  const { id } = useRouterCategoryParams();

  const initReq: GetDetailCategoryRequest = {
    categoryId: Number(id as string),
  };
  const [productGetDetailParam, setProductGetDetailParam] =
    useState<GetDetailCategoryRequest>(initReq);

  // const queryFn = useCallback(
  //   () => getDetailCategory(productGetDetailParam),
  //   [productGetDetailParam],
  // );

  // const requestQuery = useQuery(['categoryGetDetail', productGetDetailParam], queryFn, {
  //   refetchOnWindowFocus: false,
  //   staleTime: 500,
  //   cacheTime: 0,
  // });

  // const { data } = requestQuery;

  // return { data, requestQuery, setProductGetDetailParam };
}
