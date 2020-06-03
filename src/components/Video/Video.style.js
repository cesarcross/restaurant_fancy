import styled from "styled-components";
import Slider from "react-slick";

export const VideoContainer = styled.div`
  background: #48214a;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  h3 {
    text-align: center;
  }
`;

export const CarrouselSlider = styled(Slider)`
  width: 85%;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    width: 60%;
  }
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

export const VideoTitle = styled.div`
  h3 {
    text-align: center;
    font-size: 1rem;
  }
`;

export const VideoIframe = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
