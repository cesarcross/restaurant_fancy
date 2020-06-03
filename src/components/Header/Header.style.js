import styled from "styled-components";

import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  margin: 5px auto;

  h1 {
    font-size: 3rem;
    color: #fff3d9;
  }
`;

export const Address = styled.div`
  margin: 0 auto 5px;

  p {
    font-size: 0.8rem;
    margin: auto;
    text-align: center;
    color: #d3d3cb;
  }
`;

export const Social = styled.div`
  margin: 0 auto 5px;
`;

export const Facebook = styled(FaFacebookSquare)`
  font-size: 30px;
  color: #d3d3cb;
  margin: 5px;
`;

export const Instagram = styled(FaInstagram)`
  font-size: 30px;
  color: #d3d3cb;
  margin: 5px;
`;

export const Twitter = styled(FaTwitter)`
  font-size: 30px;
  color: #d3d3cb;
  margin: 5px;
`;
