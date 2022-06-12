import CarouselComponent from 'components/carousel';
import SegmentedComponent from 'components/segmented';
import React from 'react';
import OverSectionComponent from './components';

export default function HomePage() {
  return (
    <>
      <CarouselComponent />
      <SegmentedComponent />
      <OverSectionComponent />
    </>
  );
}
