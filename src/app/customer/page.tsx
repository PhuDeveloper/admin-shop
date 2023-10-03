import ListProductAll from '@/components/client/list-product-all';
import SlideHomeComponent from '@/components/slide-home';

export default function CustomerHomePage() {
  return (
    <div>
      <SlideHomeComponent />
      <div className="container">
        <h3 style={{ padding: '20px 0' }}>Sản phẩm tại cửa hàng</h3>
      </div>
      <ListProductAll />
    </div>
  );
}
