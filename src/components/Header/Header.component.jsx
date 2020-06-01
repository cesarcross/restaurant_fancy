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
    <Address>endereco</Address>
    <Logo>logo</Logo>
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
