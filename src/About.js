import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "Nikhil Ecommerce",
  };
  return <HeroSection myData={data}></HeroSection>;
};

export default About;
