import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Strengths from "./components/Strengths";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Strengths />
        <Experience />
      </div>
    </>
  );
}

export default App;
