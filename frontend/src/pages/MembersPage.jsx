import React from "react";
import Navbar from "../components/Navbar";
import Members from "../components/Members";
import ParticleBackground from "../components/ParticleBg";
import Footer from "../components/Footer";

const MembersPage = () => {
  return (
    <div className="page-wrapper">
      <ParticleBackground />

      <div className="content-layer">
        <Navbar />
        <Members />
        <Footer/>
      </div>
    </div>
  );
};

export default MembersPage;