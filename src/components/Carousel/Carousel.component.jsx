import React from "react";
import Slider from "react-slick";

import {
  CarouselContainer,
  CarouselItem,
  MobileBanner,
  SliderContainer,
} from "./Carousel.style";

import uvas from "../../assets/images_fancy/uvas.jpeg";
import carousel1 from "../../assets/images_fancy/carousel1.png";
import carousel2 from "../../assets/images_fancy/carousel2.png";
import carousel3 from "../../assets/images_fancy/landscape.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
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
        <Slider
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
          <CarouselItem>
            <img src={carousel3} alt=""></img>
          </CarouselItem>
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default Carousel;
