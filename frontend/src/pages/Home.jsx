import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ParticleBackground from "../components/ParticleBg";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Themes from "../components/Themes";
import Prizes from "../components/Prizes";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="page-wrapper">
      <ParticleBackground />

      <div className="content-layer">
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <Themes />
        <Prizes />
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
