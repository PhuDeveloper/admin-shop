import { GetDetailProductRequest, ProductEntity } from '@/types/product';
import { useRouterProductParams } from './useRouterProduct';
import { useCallback, useMemo, useState } from 'react';
import { getDetailProduct } from '@/services/product/get';
import { useQuery } from '@tanstack/react-query';

export default function useGetDetailProduct() {
  const { id } = useRouterProductParams();

  const initReq: GetDetailProductRequest = {
    productId: Number(id as string),
  };
  const [productGetDetailParam, setProductGetDetailParam] =
    useState<GetDetailProductRequest>(initReq);

  const queryFn = useCallback(
    () => getDetailProduct(productGetDetailParam),
    [productGetDetailParam],
  );

  const requestQuery = useQuery(['productGetDetail', productGetDetailParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
    cacheTime: 0,
  });

  const { data } = requestQuery;

  const productDetail = useMemo<ProductEntity | undefined>(() => {
    if (!data?.payload) return undefined;
    return data?.payload;
  }, [data?.payload]);

  return { productDetail, requestQuery, setProductGetDetailParam };
}
