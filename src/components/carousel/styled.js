import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CarouselProvider = styled.div`
  width: 100%;
  min-height: 100px;
  .button {
    position: absolute;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    z-index: 9;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 56px;
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 70px;
    &:hover {
      background-color: #ed6d00;
    }
  }
  .next__btn {
    left: 170px;
  }
  .prev__btn {
    left: 72px;
  }
`;
export const CarouselItemProvider = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
export const CarouselItemImage = styled(LazyLoadImage)`
  max-width: 100%;
  height: 100vh;
  object-position: center;
  object-fit: cover;
`;
export const CarouselItemTextContent = styled.div`
  max-width: calc(100% - 70px);
  position: absolute;
  bottom: 6px;
  left: 0;
  padding: 60px 70px 180px 60px;
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    max-width: 92%;
    margin: 4%;
    padding: 30px 40px 180px 30px;
  }
`;

export const Text1 = styled.p`
  padding: 0 0 10px;
  font-weight: 200;
  font-size: 52px;
  line-height: 66px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 56px;
  }
`;
export const Text2 = styled.p`
  padding: 0 0 25px;
  font-weight: 500;
  font-size: 36px;
  line-height: 50px;
  color: #fff;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 28px;
    line-height: 40px;
  }
`;
export const Text3 = styled.p`
  font-weight: 200;
  font-size: 20px;
  line-height: 25px;
  color: #ccc;
`;
