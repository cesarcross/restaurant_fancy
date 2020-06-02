import styled from "styled-components";

import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const HeaderContainer = styled.div`
  /* border: 2px solid #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  /* border: 2px solid #fff; */
  margin: 5px auto;

  img {
    width: 100px;
  }
`;

export const Address = styled.div`
  /* border: 2px solid #fff; */
  margin: 0 auto 5px;

  p {
    font-size: 0.8rem;
    margin: auto;
    text-align: center;
    color: #fff;
  }
`;

export const Social = styled.div`
  /* border: 2px solid #fff; */
  margin: 0 auto 5px;
`;

export const Facebook = styled(FaFacebookSquare)`
  font-size: 30px;
  /* border: 2px solid #fff; */
  /* border-radius: 50%; */
  color: #fff;
  margin: 5px;
`;

export const Instagram = styled(FaInstagram)`
  font-size: 30px;
  /* border: 2px solid #fff; */
  /* border-radius: 50%; */
  color: #fff;
  margin: 5px;
`;

export const Twitter = styled(FaTwitter)`
  font-size: 30px;
  /* border: 2px solid #fff; */
  /* border-radius: 50%; */
  color: #fff;
  margin: 5px;
`;
