import React from "react";
import Slider from "react-slick";

import { CarouselContainer } from "./Carousel.style";

import carousel1 from "../../assets/images_fancy/carousel1.png";
import carousel2 from "../../assets/images_fancy/carousel2.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <img src={carousel1} alt=""></img>
        </div>
        <div>
          <img src={carousel2} alt=""></img>
        </div>
        <div>
          <h3>3</h3>
          <img src={carousel1} alt=""></img>
        </div>
      </Slider>
      <CarouselContainer />
    </>
  );
};

export default Carousel;
