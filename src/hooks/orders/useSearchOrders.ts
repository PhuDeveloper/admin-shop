import { searchBrand } from '@/services/brand/search';
import { BrandEntity, GetListBrandRequest } from '@/types/brand';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouterOrdersParams } from './useRouterOrders';
import { GetListOrderRequest, OrdersEntity } from '@/types/order';
import { searchOrders } from '@/services/order/search';

export default function useSearchOrders() {
  const { statusParam, userIdParam, limitParam, pageParam } = useRouterOrdersParams();

  const initRequest: GetListOrderRequest = {
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 20,
  };

  const [orderSearchParam, setOrderSearchParam] = useState<GetListOrderRequest>(initRequest);

  useEffect(() => {
    const request: GetListOrderRequest = {
      page: pageParam ? Number(pageParam) : 1,
      limit: limitParam ? Number(limitParam) : 20,
    };

    if (statusParam) {
      request.status = Number(statusParam);
    }

    if (userIdParam) {
      request.userId = Number(userIdParam);
    }

    setOrderSearchParam(request);
  }, [limitParam, pageParam, statusParam, userIdParam]);

  const queryFn = useCallback(() => searchOrders(orderSearchParam), [orderSearchParam]);

  const requestQuery = useQuery(['orderSearch', orderSearchParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
  });

  const { data } = requestQuery;

  const orderList = useMemo<OrdersEntity[]>(() => {
    if (!data?.payload?.order_list) return [];

    return data?.payload?.order_list;
  }, [data?.payload?.order_list]);

  return {
    orderList,
    requestQuery,
    setOrderSearchParam,
  };
}
