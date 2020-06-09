import styled from "styled-components";

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding-bottom: 20px;
  background: #350300;

  h3 {
    margin: 20px auto;
    text-align: center;
    color: #d3d3cb;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

export const EventCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const EventUnit = styled.div`
  border: 2px solid #d3d3cb;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  padding: 0;
  width: min-content;

  img {
    width: 250px;
    height: 284px;
    object-fit: cover;
  }

  h3 {
    text-align: center;
    margin: 10px auto;
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    margin: 0;
  }

  h3,
  p {
    font-size: 1.2rem;
    color: #d3d3cb;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 330px;
    }

    h3,
    p {
      font-size: 1.5rem;
    }
  }
`;
