import { createProduct } from '@/services/product/create';
import { CreateProductRequest } from '@/types/product';
import { useMutation } from '@tanstack/react-query';

export default function useCreateProduct() {
  const createProductMutation = useMutation({
    mutationFn: (body: CreateProductRequest) => {
      return createProduct(body);
    },
  });
  return { createProductMutation };
}
