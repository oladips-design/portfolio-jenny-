import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Strengths from "../components/Strengths";
import Work from "../components/Work";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Work />
      <About />
      <Strengths />
      <Experience />
      <Contact />
    </div>
  );
}
