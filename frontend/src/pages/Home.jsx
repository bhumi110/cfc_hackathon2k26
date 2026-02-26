import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ParticleBackground from "../components/ParticleBg";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Venue from "../components/Venue";
import Themes from "../components/Themes";
import Prizes from "../components/Prizes";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

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
        <Venue />
        <FAQ />
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
