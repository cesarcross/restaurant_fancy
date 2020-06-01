import styled from "styled-components";

import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const HeaderContainer = styled.div`
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Address = styled.div`
  border: 2px solid #fff;
`;
export const Logo = styled.div`
  border: 2px solid #fff;
`;
export const Social = styled.div`
  border: 2px solid #fff;
`;

export const Facebook = styled(FaFacebookSquare)`
  font-size: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
`;

export const Instagram = styled(FaInstagram)`
  font-size: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
`;

export const Twitter = styled(FaTwitter)`
  font-size: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
`;
