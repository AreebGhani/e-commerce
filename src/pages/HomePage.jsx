import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";

export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Products />
      <Footer />
    </>
  );
}
