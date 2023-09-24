import { ReactNode } from 'react';

export interface DataTypeProductList {
  key: string;
  stt: ReactNode;
  product: ReactNode;
  productType: ReactNode;
  brand: ReactNode;
  productPrice: ReactNode;
  productStatus: ReactNode;
  // isDeleted: ReactNode;
  action: ReactNode;
}
