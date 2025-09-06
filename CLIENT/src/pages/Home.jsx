import React from "react";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Locations from "../components/Locations.jsx";
import HospitalServices from "../components/HospitalServices.jsx";
import HappyPets from "../components/HappyPets.jsx";
import Experts from "../components/Experts.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Locations />
      <HospitalServices />
      <HappyPets />
      <Experts />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
