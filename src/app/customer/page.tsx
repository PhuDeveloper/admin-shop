'use client';

import ListProductAll from '@/components/client/list-product-all';
import ListProductByBrandComponent from '@/components/client/list-product-by-brand';
import ListImageAdvertisementComponent from '@/components/list-image-advertisement';
import SlideHomeComponent from '@/components/slide-home';
import { Link, Url } from '@/enums/url-link-image-advertisement';
import useSearchProduct from '@/hooks/product/useSearchProduct';

export default function CustomerHomePage() {
  const { productList } = useSearchProduct();
  return (
    <div>
      <SlideHomeComponent />
      <div className="container">
        <h3 style={{ padding: '20px 0' }}>Sản phẩm tại cửa hàng</h3>
      </div>
      <ListProductAll products={productList} />

      <div>
        <ListImageAdvertisementComponent
          url1={Url.URL1}
          url2={Url.URL2}
          link1={Link.LINK1}
          link2={Link.LINK2}
        />
      </div>

      <div className="container">
        <h3 style={{ padding: '20px 0' }}>Sản phẩm thương hiệu</h3>
      </div>
      <div style={{ paddingBottom: '30px' }}>
        <ListProductByBrandComponent products={productList} />
      </div>
    </div>
  );
}
