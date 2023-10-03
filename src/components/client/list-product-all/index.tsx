import ItemProductComponent from '@/components/item-product';

export default function ListProductAll() {
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
        <ItemProductComponent />
        <ItemProductComponent />
        <ItemProductComponent />
        <ItemProductComponent />
        <ItemProductComponent />
      </div>
    </section>
  );
}
