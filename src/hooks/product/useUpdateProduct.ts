import { updateProduct } from '@/services/product/update';
import { UpdateProductRequest } from '@/types/product';
import { useMutation } from '@tanstack/react-query';

export default function useUpdateProduct() {
  const updateProductMutation = useMutation({
    mutationFn: (body: UpdateProductRequest) => {
      return updateProduct(body);
    },
  });
  return { updateProductMutation };
}
