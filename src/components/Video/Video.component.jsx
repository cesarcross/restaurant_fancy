import React from "react";

import {
  VideoContainer,
  VideoUnit,
  VideoTitle,
  VideoIframe,
} from "./Video.style";

const Video = () => (
  <VideoContainer>
    <VideoUnit>
      <VideoTitle>
        <h3>Um passeio pela vinicola submarina</h3>
      </VideoTitle>
      <VideoIframe>
        <iframe
          title="A Vinicola do Cesar Capone"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/n6LTuxyOAYs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoIframe>
    </VideoUnit>
  </VideoContainer>
);

export default Video;
