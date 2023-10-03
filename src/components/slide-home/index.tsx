'use client';

import { Carousel } from 'react-responsive-carousel';

export default function SlideHomeComponent() {
  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <div>
        <Carousel
          showThumbs={false}
          infiniteLoop
          interval={2000}
          autoPlay
          showStatus={false}
          // showArrows={true}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <div>
            <img
              style={{ borderRadius: '20px' }}
              src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1695006385218-808x340_Main-Banner-Z-2023.jpg&w=828&q=75"
            />
          </div>
          <div>
            <img
              style={{ borderRadius: '20px' }}
              src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1695970475728-808x340_Main-Banner-iPhone-12-Series.jpg&w=828&q=75"
            />
          </div>
          <div>
            <img
              style={{ borderRadius: '20px' }}
              src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1695626420761-808x340_iPad-Pro-M1.jpg&w=828&q=75"
            />
          </div>
          <div>
            <img
              style={{ borderRadius: '20px' }}
              src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1693275097476-808x340_MacAirM1.jpg&w=828&q=75"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
