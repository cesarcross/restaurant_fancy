import styled from "styled-components";
import Slider from "react-slick";

export const CarouselContainer = styled.div``;

export const MobileBanner = styled.div`
  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SliderContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const CarrouselSlider = styled(Slider)`
  width: 90%;
  margin: 0 auto;
`;

export const CarouselItem = styled.div`
  img {
    width: 100%;
  }
`;
