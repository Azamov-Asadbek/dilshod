import React from 'react';
import { Carousel } from 'antd';
import { CarouselProvider } from './styled';
import { CarouselItem } from './components/list';
import ItemCArousel from './components/item';
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons';

export default function CarouselComponent() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="button next__btn" onClick={onClick}>
        <SwapRightOutlined />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="button prev__btn" onClick={onClick}>
        <SwapLeftOutlined />
      </div>
    );
  }
  return (
    <CarouselProvider>
      <Carousel
        arrows={true}
        dots={false}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        autoplay
      >
        {CarouselItem.map((item) => (
          <ItemCArousel key={item?.id} item={item} />
        ))}
      </Carousel>
    </CarouselProvider>
  );
}
