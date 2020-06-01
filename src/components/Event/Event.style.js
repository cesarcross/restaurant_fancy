import styled from "styled-components";

export const EventContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  background: gray;

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

export const EventCards = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const EventUnit = styled.div`
  border: 2px solid;
  border-radius: 3px;
  border-color: ${({ bgcolor }) => bgcolor};
  background: ${({ bgcolor }) => bgcolor};
  color: ${({ txtcolor }) => txtcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  padding: 0;
  width: min-content;

  img {
    width: 250px;
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
