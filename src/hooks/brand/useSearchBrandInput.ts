import { searchProduct } from '@/services/product/search';
import { GetListProductRequest, ProductEntity } from '@/types/product';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouterBrandParams } from './useRouterBrandt';
import { BrandEntity, GetListBrandRequest } from '@/types/brand';
import { searchBrand } from '@/services/brand/search';

export default function useSearchBrandInput() {
  const { limitParam, pageParam } = useRouterBrandParams();

  const initRequest: GetListBrandRequest = {
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 20,
  };

  const [brandSearchParam, setBrandSearchParam] = useState(initRequest);

  const queryFn = useCallback(() => searchBrand(brandSearchParam), [brandSearchParam]);

  const requestQuery = useQuery(['brandSearchInput', brandSearchParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
  });

  const { data } = requestQuery;

  const brandList = useMemo<BrandEntity[]>(() => {
    if (!data?.payload?.brand_list) return [];

    return data?.payload?.brand_list;
  }, [data?.payload?.brand_list]);

  return {
    brandList,
    requestQuery,
    setBrandSearchParam,
  };
}
