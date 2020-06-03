import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #350300;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: #fff3d9;
  }
`;

export const FooterAddress = styled.div`
  p {
    text-align: center;
    color: #d3d3cb;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    p {
      font-size: 1.5rem;
      margin-top: 10px;
      margin-bottom: 0;
    }

    p:first-of-type {
      margin-right: 5px;
    }

    p:last-of-type {
      margin: 5px auto;
    }
  }

  @media screen and (min-width: 992px) {
    p {
      font-size: 1rem;
    }

    p:last-of-type {
      margin: 10px 0 0 5px;
    }
  }

  @media screen and (min-width: 1200px) {
    p,
    p:first-of-type,
    p:last-of-type {
      font-size: 1rem;
      margin: 0 2px;
    }
  }
`;

export const FooterCaravan = styled.div`
  p {
    color: #d3d3cb;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #94999d;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1200px) {
    margin: 2px;
  }
`;
