import React from "react";

import {
  HeaderContainer,
  Address,
  Logo,
  Social,
  Facebook,
  Instagram,
  Twitter,
} from "./Header.style";

export const Header = () => (
  <HeaderContainer>
    <Logo>
      <h1>Bistro #327</h1>
    </Logo>
    <Address>
      <p>Endereço: Rua Las Ramblas</p>
      <p>Barcelona, ES 08027</p>
      <p>Telefone: 91 774 10 56 - contato@uva.com.br</p>
    </Address>
    <Social>
      <a
        href="https://www.facebook.com"
        alt="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com"
        alt="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
      <a
        href="https://www.twitter.com"
        alt="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
    </Social>
  </HeaderContainer>
);

export default Header;
