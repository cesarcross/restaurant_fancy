import styled from "styled-components";

export const CarouselContainer = styled.div`
  border: 2px solid green;
  /* max-width: 1300px; */
`;

export const MobileBanner = styled.div`
  border: 2px solid yellow;

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

export const CarouselItem = styled.div`
  border: 2px solid red;

  img {
    width: 100%;
    margin: 0 30px;
  }
`;
