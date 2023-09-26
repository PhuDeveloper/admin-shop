import { searchBrand } from '@/services/brand/search';
import { BrandEntity, GetListBrandRequest } from '@/types/brand';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';

export default function useSearchBrandInput() {
  const initRequest: GetListBrandRequest = {
    page: 1,
    limit: 20,
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
