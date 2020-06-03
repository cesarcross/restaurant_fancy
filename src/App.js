import React from "react";

import ScrollTopArrow from "./assets/ScrollArrow";

import Header from "./components/Header/Header.component";
import Navbar from "./components/Navbar/Navbar.component";
import Carousel from "./components/Carousel/Carousel.component";
import FancyMenu from "./components/FancyMenu/FancyMenu.component";
import About from "./components/About/About.component";
import Video from "./components/Video/Video.component";
import Event from "./components/Event/Event.component";
import Form from "./components/Form/Form.component";
import Footer from "./components/Footer/Footer.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollTopArrow />
      <Header />
      <Navbar />
      <Carousel />
      <FancyMenu />
      <About />
      <Video />
      <Event />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
