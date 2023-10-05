import { Image } from 'antd';
import { ItemImageAdvertisementProps } from './type';

export default function ItemImageAdvertisementComponent(props: ItemImageAdvertisementProps) {
  const { url } = props;
  return (
    <div>
      <Image
        preview={false}
        width="100%"
        src={`${url}`}
        style={{ padding: '5px', borderRadius: '10px' }}
      />
    </div>
  );
}
