import styled from "styled-components";

import { GiSecretBook } from "react-icons/gi";

import { FaWhatsapp } from "react-icons/fa";

export const FancyMenuContainer = styled.div`
  background: #350300;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  padding: 20px 0;

  h3 {
    margin: 20px auto;
    color: #fff;
  }
`;

export const FancyMenuButton = styled.a`
  border: 2px solid #be0a00;
  background: #382e2f;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  p {
    color: #fff;
    text-align: center;
  }

  svg {
    filter: invert(100%) sepia(7%) saturate(37%) hue-rotate(206deg)
      brightness(117%) contrast(100%);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 200px;

    p {
      margin: 0;
    }
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
  background: #be0a00;
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
  background: #be0a00;
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
