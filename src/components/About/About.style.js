import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  background: #350300;
  color: #fff;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 20px;
  }

  @media screen and (min-width: 992px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 1200px) {
    margin: 100px auto;
  }
`;

export const AboutText = styled.div`
  width: 90%;
  margin: 5px auto;
  text-align: justify;

  h3 {
    font-size: 1.2rem;
    margin: 15px 0;
  }

  h3,
  p {
    color: #d3d3cb;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 10px;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 992px) {
    h3 {
      font-size: 1.5rem;
      margin: auto 50px;
    }

    p {
      font-size: 1rem;
      margin: 40px 50px auto;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const AboutImg = styled.div`
  width: 90%;
  /* margin: 5px auto; */
  margin: 20px;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 10px;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`;
