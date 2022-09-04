import React from "react";
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <>
      <NavBar />
      <Fade top distance="60px">
        <Carousel />
      </Fade>
    </>
  );
}
