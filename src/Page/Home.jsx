import React from "react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Service from "../Components/ServiceList/ServiceComponent";
import Vision from "../Components/Vision";
import Mision from "../Components/Mision";
import Contact from "../Components/Contact";
import Categories from "../Components/ServiceList/Categories";

export default function Home() {
  return (
    // The main container div with the class 'overflow-hidden'
    <div className="overflow-hidden">
      <Navbar />

      <Hero />

      <About />

      <Categories />

      <Vision />

      <Mision />

      <Contact />
    </div>
  );
}
