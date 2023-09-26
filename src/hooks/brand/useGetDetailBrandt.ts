import { getDetailBrand } from '@/services/brand/get';
import { GetDetailBrandRequest } from '@/types/brand';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useRouterBrandParams } from './useRouterBrandt';

export default function useGetDetailBrand() {
  const { id } = useRouterBrandParams();

  const initReq: GetDetailBrandRequest = {
    brandId: Number(id as string),
  };
  const [brandGetDetailParam, setBrandGetDetailParam] = useState<GetDetailBrandRequest>(initReq);

  const queryFn = useCallback(() => getDetailBrand(brandGetDetailParam), [brandGetDetailParam]);

  const requestQuery = useQuery(['brandGetDetail', brandGetDetailParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
    cacheTime: 0,
  });

  const { data } = requestQuery;

  return { data, requestQuery, setBrandGetDetailParam };
}
