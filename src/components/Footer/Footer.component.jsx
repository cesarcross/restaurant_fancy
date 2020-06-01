import React from "react";

import {
  FooterContainer,
  FooterLogo,
  FooterAddress,
  FooterSocial,
  FooterCaravan,
  FooterFacebook,
  FooterInstagram,
  FooterTwitter,
} from "./Footer.style";

import Logo from "../../assets/images/footer_logo.png";

const Footer = () => (
  <FooterContainer>
    <FooterLogo>
      <img src={Logo} alt="Logo" />
    </FooterLogo>
    <FooterAddress>
      <p>Endereço: Rua Las Ramblas</p>
      <p>Barcelona, ES 08027</p>
      <p>Telefone: 91 774 10 56</p>
    </FooterAddress>
    {/* <FooterSocial>
      <a
        href="https://www.facebook.com"
        alt="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterFacebook />
      </a>
      <a
        href="https://www.instagram.com"
        alt="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterInstagram />
      </a>
      <a
        href="https://www.twitter.com"
        alt="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterTwitter />
      </a>
    </FooterSocial> */}
    <FooterCaravan>
      <p>
        Site desenvolvido por{" "}
        <a
          href="https://www.codecaravan.com.br"
          alt="Code Caravan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Caravan
        </a>
      </p>
    </FooterCaravan>
  </FooterContainer>
);

export default Footer;
