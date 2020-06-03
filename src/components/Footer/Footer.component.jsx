import React from "react";

import {
  FooterContainer,
  FooterLogo,
  FooterAddress,
  FooterCaravan,
} from "./Footer.style";

const Footer = () => (
  <FooterContainer>
    <FooterLogo>
      <h1>Bistro #327</h1>
    </FooterLogo>
    <FooterAddress>
      <p>Endereço: Rua Las Ramblas</p>
      <p>Barcelona, ES 08027</p>
      <p>Telefone: 91 774 10 56</p>
    </FooterAddress>
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
