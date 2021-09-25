import React from "react";
import Navbar from "./layout/Navbar";
import Hero from './layout/Hero'
import Skill from "./layout/Skill";
import Footer from './layout/Footer'
import Contact from "./layout/Contact";
import Project from "./layout/Project";
function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
