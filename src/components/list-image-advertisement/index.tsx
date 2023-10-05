'use client';

import { Col, Row } from 'antd';
import ItemImageAdvertisementComponent from '../item-image-advertisement';
import { ListImageAdvertisementProps } from './type';

export default function ListImageAdvertisementComponent(props: ListImageAdvertisementProps) {
  const { link1, link2, url1, url2 } = props;
  return (
    <div className="container">
      <Row>
        <Col xs={24} lg={12}>
          <ItemImageAdvertisementComponent url={url1} link={link1} />
        </Col>
        <Col xs={24} lg={12}>
          <ItemImageAdvertisementComponent url={url2} link={link2} />
        </Col>
      </Row>
    </div>
  );
}
