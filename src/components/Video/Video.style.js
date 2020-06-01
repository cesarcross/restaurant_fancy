import styled from "styled-components";

export const VideoContainer = styled.div`
  border: 2px solid green;
  background: #48214a;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  h3 {
    text-align: center;
  }
`;

export const VideoUnit = styled.div`
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

export const VideoTitle = styled.div`
  border: 2px solid yellow;
  width: 90vw;
  text-align: center;

  h3 {
    text-align: center;
    font-size: 1rem;
  }
`;

export const VideoIframe = styled.div`
  width: 90vw;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  /* margin: 30px auto; */
  align-items: center;
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
