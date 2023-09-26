export interface ProductFilterFormValue {
  productName: string;
  productCode: string;
  productStatus: number;
  category: { value: string; label: string };
  brand: { value: string; label: string };
  productStart: number;
}
