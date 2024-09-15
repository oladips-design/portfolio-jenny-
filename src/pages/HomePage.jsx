import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Strengths from "../components/Strengths";
import Work from "../components/Work";
import bgImg from "../assets/unsplash_ek7Y_iOl3UQ(2).png";

import "../App.css";
import Navbar from "../components/Navbar";
export default function HomePage() {
  return (
    <div className="main">
      <img src={bgImg} className="bg" />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <div className="bg_container">
        <img src={bgImg} className="bg" />
        <Experience />
        <Strengths />
        <Contact />
      </div>
    </div>
  );
}
