import { searchProduct } from '@/services/product/search';
import { GetListProductRequest, ProductEntity } from '@/types/product';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouterProductParams } from './useRouterProduct';

export default function useSearchProduct() {
  const {
    brandIdParam,
    categoryIdParam,
    isDeletedParam,
    productCodeParam,
    productNameParam,
    productStatusParam,
    productStartParam,
    limitParam,
    pageParam,
  } = useRouterProductParams();

  const initRequest: GetListProductRequest = {
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 20,
  };

  const [productSearchParam, setProductSearchParam] = useState(initRequest);

  useEffect(() => {
    const request: GetListProductRequest = {
      page: pageParam ? Number(pageParam) : 1,
      limit: limitParam ? Number(limitParam) : 20,
    };

    if (brandIdParam) {
      request.brandId = Number(brandIdParam);
    }

    if (categoryIdParam) {
      request.categoryId = Number(categoryIdParam);
    }

    if (isDeletedParam) {
      request.isDeleted = Number(isDeletedParam);
    }

    if (productCodeParam) {
      request.productCode = productCodeParam;
    }

    if (productNameParam) {
      request.productName = productNameParam;
    }

    if (productStatusParam) {
      request.productStatus = Number(productStatusParam);
    }

    if (productStartParam) {
      request.productStart = Number(productStartParam);
    }

    setProductSearchParam(request);
  }, [
    brandIdParam,
    categoryIdParam,
    isDeletedParam,
    productCodeParam,
    productNameParam,
    productStatusParam,
    productStartParam,
  ]);

  const queryFn = useCallback(() => searchProduct(productSearchParam), [productSearchParam]);

  const requestQuery = useQuery(['productSearch', productSearchParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
  });

  const { data } = requestQuery;

  const productList = useMemo<ProductEntity[]>(() => {
    if (!data?.payload?.product_list) return [];

    return data?.payload?.product_list;
  }, [data?.payload?.product_list]);

  return {
    productList,
    requestQuery,
    setProductSearchParam,
  };
}
