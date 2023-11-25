import { getDetailOrders } from '@/services/order/get';
import { GetDetailOrderRequest, OrdersEntity } from '@/types/order';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';
import { useRouterOrdersParams } from './useRouterOrders';

export default function useGetDetailOrder() {
  const { id } = useRouterOrdersParams();

  const initReq: GetDetailOrderRequest = {
    orderId: Number(id as string),
  };
  const [orderGetDetailParam, setOrderGetDetailParam] = useState<GetDetailOrderRequest>(initReq);

  const queryFn = useCallback(() => getDetailOrders(orderGetDetailParam), [orderGetDetailParam]);

  const requestQuery = useQuery(['orderGetDetail', orderGetDetailParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
    cacheTime: 0,
  });

  const { data } = requestQuery;

  const orderDetail = useMemo<OrdersEntity | undefined>(() => {
    return data?.payload;
  }, [data?.payload]);

  return { orderDetail, requestQuery, setOrderGetDetailParam };
}
