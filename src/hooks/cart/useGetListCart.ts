import { getCart } from '@/services/cart/get-cart';
import { CartsEntity } from '@/types/cart';
import { ProductEntity } from '@/types/product';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

export default function useGetListCart() {
  const queryFn = useCallback(() => getCart(), []);

  const requestQuery = useQuery(['getCart'], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
  });

  const { data } = requestQuery;

  const productList = useMemo<ProductEntity[]>(() => {
    if (!data?.payload?.product) return [];

    return data?.payload?.product;
  }, [data?.payload?.product]);

  return {
    productList,
    requestQuery,
  };
}
