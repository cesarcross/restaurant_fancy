import React from "react";
import { Element } from "react-scroll";

import {
  FancyMenuContainer,
  FancyMenuButton,
  DeliveryLink,
  Ifood,
  Whatsapp,
  WhatsappIcon,
} from "./FancyMenu.style";
import { ReactComponent as MenuIcon } from "../../assets/images/menu.svg";

import Menu from "../../assets/menu.pdf";

import ifood from "../../assets/images/ifood-logo.png";

const FancyMenu = () => (
  <Element id="delivery" name="delivery">
    <FancyMenuContainer>
      <FancyMenuButton href={Menu} alt="Menu" target="blank">
        <p>Confira nosso cardápio</p>
        <MenuIcon style={{ width: "70px", height: "70px" }} />
      </FancyMenuButton>
      <h3>Faça seu pedido!</h3>
      <DeliveryLink
        href="http://www.ifood.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Ifood>
          <img src={ifood} alt="" />
        </Ifood>
      </DeliveryLink>
      <DeliveryLink
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Whatsapp>
          Whatsapp <WhatsappIcon />
        </Whatsapp>
      </DeliveryLink>
    </FancyMenuContainer>
  </Element>
);

export default FancyMenu;
