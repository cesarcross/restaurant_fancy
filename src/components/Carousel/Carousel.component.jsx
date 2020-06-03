import React from "react";

import {
  CarouselContainer,
  CarouselItem,
  MobileBanner,
  SliderContainer,
  CarrouselSlider,
} from "./Carousel.style";

import interior from "../../assets/images/interior.jpg";
import carousel1 from "../../assets/images/farmland.jpg";
import carousel2 from "../../assets/images/wine-bottle-beside-grapes-roses-and-several-fruits-on-brown.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    acessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <MobileBanner>
        <img src={interior} alt=""></img>
      </MobileBanner>
      <SliderContainer>
        <CarrouselSlider {...settings}>
          <CarouselItem>
            <img src={carousel1} alt=""></img>
          </CarouselItem>
          <CarouselItem>
            <img src={carousel2} alt=""></img>
          </CarouselItem>
        </CarrouselSlider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default Carousel;
