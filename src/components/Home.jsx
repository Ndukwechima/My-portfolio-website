import React from "react";
import Profile from "./Profile";
import Skill from "./Skills";
import About from "./About";
import Technology from "./Technology";
import Project from "./Project";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className="h-screen" id="home">
      <Header />
      <Profile />
      <Skill />
      <About />
      <Technology />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
