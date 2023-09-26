export interface CreateProductFormValue {
  productName: string;
  productCode: string;
  category: {
    value: number;
    label: string;
  };
  brand: {
    value: number;
    label: string;
  };
  productStatus: number;
  productStart: number;
  productPriceOrg: number;
  productPriceDiscount: number;
  productDescription: string;
}
