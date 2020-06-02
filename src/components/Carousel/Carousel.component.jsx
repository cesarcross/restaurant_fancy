import React from "react";

import {
  CarouselContainer,
  CarouselItem,
  MobileBanner,
  SliderContainer,
  CarrouselSlider,
} from "./Carousel.style";

import uvas from "../../assets/images_fancy/uvas.jpeg";
import carousel1 from "../../assets/images_fancy/farmland.jpg";
import carousel2 from "../../assets/images_fancy/wine-bottle-beside-grapes-roses-and-several-fruits-on-brown.jpg";

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
        <img src={uvas} alt=""></img>
      </MobileBanner>
      <SliderContainer>
        <CarrouselSlider
          {...settings}
          // tentar adaptacao abaixo
          // style={({ display: "flex" }, { maxwidth: "992px" })}
        >
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
