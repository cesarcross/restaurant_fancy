import React from "react";

import { EventContainer, EventCards, EventUnit } from "./Event.style";

import evento1 from "../../assets/images_fancy/live1.jpg";
import evento2 from "../../assets/images_fancy/live2.jpg";
import evento3 from "../../assets/images_fancy/live3.jpg";
import evento4 from "../../assets/images_fancy/live.png";

const Event = () => (
  <EventContainer>
    <h3>Eventos</h3>
    <EventCards>
      <EventUnit>
        <img src={evento1} alt="evento 1" />
        <h3>Mini Master Chefs</h3>
        <p>Domingo às 19h00</p>
      </EventUnit>
      <EventUnit>
        <img src={evento2} alt="evento 2" />
        <h3>Mini Master Chefs</h3>
        <p>Domingo às 19h00</p>
      </EventUnit>
      <EventUnit>
        <img src={evento3} alt="evento 3" />
        <h3>Mini Master Chefs</h3>
        <p>Domingo às 19h00</p>
      </EventUnit>
      <EventUnit>
        <img src={evento4} alt="evento 4" />
        <h3>Mini Master Chefs</h3>
        <p>Domingo às 19h00</p>
      </EventUnit>
    </EventCards>
  </EventContainer>
);

export default Event;
