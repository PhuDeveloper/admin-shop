import { searchBrand } from '@/services/brand/search';
import { BrandEntity, GetListBrandRequest } from '@/types/brand';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouterBrandParams } from './useRouterBrandt';

export default function useSearchBrand() {
  const { brandIdParam, isDeletedParam, brandCodeParam, brandNameParam, limitParam, pageParam } =
    useRouterBrandParams();

  const initRequest: GetListBrandRequest = {
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 20,
  };

  const [brandSearchParam, setBradSearchParam] = useState(initRequest);

  useEffect(() => {
    const request: GetListBrandRequest = {
      page: pageParam ? Number(pageParam) : 1,
      limit: limitParam ? Number(limitParam) : 20,
    };

    if (brandIdParam) {
      request.brandId = Number(brandIdParam);
    }

    if (isDeletedParam) {
      request.isDeleted = Number(isDeletedParam);
    }

    if (brandCodeParam) {
      request.brandCode = brandCodeParam;
    }

    if (brandNameParam) {
      request.brandName = brandNameParam;
    }

    setBradSearchParam(request);
  }, [brandIdParam, isDeletedParam, brandCodeParam, brandNameParam, limitParam, pageParam]);

  const queryFn = useCallback(() => searchBrand(brandSearchParam), [brandSearchParam]);

  const requestQuery = useQuery(['brandSearch', brandSearchParam], queryFn, {
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
    setBradSearchParam,
  };
}
