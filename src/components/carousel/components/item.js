import React from 'react';
import {
  CarouselItemImage,
  CarouselItemProvider,
  CarouselItemTextContent,
  Text1,
  Text2,
  Text3,
} from '../styled';

export default function ItemCArousel({ item }) {
  return (
    <CarouselItemProvider>
      <CarouselItemImage width={'100%'} effect="blur" src={item?.img} />
      <CarouselItemTextContent>
        <Text1>{item?.text1}</Text1>
        <Text2>{item?.text2}</Text2>
        <Text3>{item?.text3}</Text3>
      </CarouselItemTextContent>
    </CarouselItemProvider>
  );
}
