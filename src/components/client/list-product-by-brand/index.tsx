import ItemProductComponent from '@/components/item-product';
import { ListProductByBrandProps } from './type';

export default function ListProductByBrandComponent(props: ListProductByBrandProps) {
  const { products } = props;

  return (
    <section className="container">
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {products.map((item) => {
          return <ItemProductComponent key={item.id} product={item} />;
        })}
      </div>
    </section>
  );
}
