import React from "react";

import { Navbar, Nav } from "./Navbar.style";
import Scroll from "react-scroll";

const NavbarDefault = () => {
  const ScrollLink = Scroll.Link;

  return (
    <Navbar expand="lg">
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      ></ScrollLink>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ margin: "auto" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ScrollLink to="delivery" spy={true} smooth={true} duration={1000}>
            <Nav>
              <button>Delivery</button>
            </Nav>
          </ScrollLink>
          <ScrollLink to="sobre" spy={true} smooth={true} duration={1000}>
            <Nav>
              <button>Sobre</button>
            </Nav>
          </ScrollLink>
          <ScrollLink to="eventos" spy={true} smooth={true} duration={1000}>
            <Nav>
              <button>Eventos</button>
            </Nav>
          </ScrollLink>
          <ScrollLink to="contato" spy={true} smooth={true} duration={1000}>
            <Nav>
              <button>Contato</button>
            </Nav>
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDefault;
