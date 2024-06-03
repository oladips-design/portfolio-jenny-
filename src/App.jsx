import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Strengths from "./components/Strengths";
import Work from "./components/Work";
import bgImg from "./assets/unsplash_ek7Y_iOl3UQ(2).png";
import "./App.css";
function App() {
  return (
    <>
      <div className="main">
        <div className="bg_group">
          <img src={bgImg} className="bg" />
          <img src={bgImg} className="bg" />
          <img src={bgImg} className="bg" />
        </div>

        <Navbar />
        <Hero />
        <Work />
        <About />
        <div className="bg_container">
          <Strengths />
          <Experience />
          <img src={bgImg} className="bg" />
        </div>
      </div>
    </>
  );
}

export default App;
