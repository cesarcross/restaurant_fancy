import styled from "styled-components";

import { GiSecretBook } from "react-icons/gi";

import { FaWhatsapp } from "react-icons/fa";

export const FancyMenuContainer = styled.div`
  border: 2px solid #6c346e;
  background: #6c346e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`;

export const FancyMenuButton = styled.a`
  border: 2px solid #fff;
  background: #382e2f;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-decoration: none;
    color: #fff;
    text-align: center;
  }
`;

export const FancyMenuIcon = styled(GiSecretBook)`
  font-size: 50px;
  color: white;
`;

export const DeliveryLink = styled.a`
  margin: 0 auto;
`;

export const Ifood = styled.button`
  border: none;
  background: #ea1e2c;
  color: #fff;
  width: 170px;
  height: 40px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 220px;
  }

  &:hover {
    background: #f25d46;
  }

  img {
    width: 50px;
  }
`;

export const Whatsapp = styled.button`
  border: none;
  background: #04e676;
  color: #fff;
  width: 170px;
  height: 40px;
  margin: 5px auto 15px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    width: 220px;
  }

  &:hover {
    background: #9aef99;
  }
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  color: #fff;
`;
