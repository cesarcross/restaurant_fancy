import React from "react";

import {
  FancyMenuContainer,
  FancyMenuIcon,
  FancyMenuButton,
} from "./FancyMenu.style";

import Menu from "../../assets/images_fancy/Menu.pdf";

const FancyMenu = () => (
  <FancyMenuContainer>
    <FancyMenuButton>
      <a href={Menu} alt="Menu" target="blank">
        CONFIRA O NOSSO CARDAPIO <FancyMenuIcon />
      </a>
    </FancyMenuButton>
  </FancyMenuContainer>
);

export default FancyMenu;
