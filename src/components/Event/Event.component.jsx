import React from "react";

import { EventContainer, EventCards, EventUnit } from "./Event.style";

import live from "../../assets/images_fancy/live.png";

const Event = () => (
  <EventContainer>
    <h3>Eventos</h3>
    <EventCards>
      <EventUnit>
        <img src={live} alt="live" />
        <h3>Mini Master Chefs</h3>
        <p>Domingo às 19h00</p>
      </EventUnit>
      <EventUnit>
        <img src={live} alt="live" />
        <h3>Mini Master Chefs</h3>
        <p>Domingo às 19h00</p>
      </EventUnit>
      <EventUnit>
        <img src={live} alt="live" />
        <h3>Mini Master Chefs</h3>
        <p>Domingo às 19h00</p>
      </EventUnit>
    </EventCards>
  </EventContainer>
);

export default Event;
