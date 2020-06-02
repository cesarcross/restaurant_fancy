import React from "react";

import {
  VideoContainer,
  CarrouselSlider,
  CarouselItem,
  // VideoUnit,
  VideoTitle,
  VideoIframe,
} from "./Video.style";

const Video = () => {
  const settings = {
    dots: true,
    // arrows: true,
    acessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <VideoContainer>
      <CarrouselSlider {...settings}>
        <CarouselItem>
          <VideoTitle>
            <h3>Um passeio pela vinicola submarina</h3>
          </VideoTitle>
          <VideoIframe>
            <iframe
              title="A Vinicola do Cesar Capone"
              src="https://www.youtube.com/embed/n6LTuxyOAYs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoIframe>
        </CarouselItem>
        <CarouselItem>
          <VideoTitle>
            <h3>As cores da Argentina!</h3>
          </VideoTitle>
          <VideoIframe>
            <iframe
              title="Frase"
              src="https://www.youtube.com/embed/8OvfmZ_TTkM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoIframe>
        </CarouselItem>
      </CarrouselSlider>
    </VideoContainer>
  );
};

export default Video;
